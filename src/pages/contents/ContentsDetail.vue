<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">콘텐츠 관리</p>
    <!--  Buttons  -->
    <div class="w-full text-right mb-8">
      <span class="mr-10 text-2xl cursor-pointer" @click="removeContents(this.contents)">
          <i class="fas fa-trash-alt"></i>
      </span>
      <span class=" text-2xl cursor-pointer" @click="goToDetail('ContentsSetting', this.contents)">
          <i class="fas fa-pencil-alt"></i>
      </span>
    </div>
    <p class="text-center font-bold text-3xl mb-16 text-amber-700">{{this.title}}</p>
    <div class="w-full flex gap-10 mb-10">
      <div class="w-1/3 rounded-xl border px-5 py-4">
        <p class="text-left text-lg mb-2">총 노출 횟수</p>
        <p class="text-left font-bold text-3xl">{{ this.insertComma(this.viewCntTotal)}}</p>
      </div>
      <div class="w-1/3 rounded-xl border px-5 py-4">
        <p class="text-left text-lg mb-2">오늘 노출 횟수</p>
        <p class="text-left font-bold text-3xl">{{ this.insertComma(this.viewCntToday)}}</p>
      </div>
      <div class="w-1/3 rounded-xl border px-5 py-4">
        <p class="text-left text-lg mb-2">총 공유 횟수</p>
        <p class="text-left font-bold text-3xl">{{ this.insertComma(this.shareCntTotal)}}</p>
      </div>
    </div>
    <div class="flex mb-10 w-4/5 m-auto align-middle">
      <div class="w-2/5">
        <img class="w-full rounded-2xl mb-5" :src="getFirstImagePath(this.file1)">
        <p class="font-bold text-2xl mb-2">{{this.explanation1}}</p>
        <p class="font-bold text-3xl">{{this.insertComma(this.type1CntTotal)}}</p>
      </div>
      <div class="w-1/5 text-center flex justify-center items-center">
        <span class="font-extrabold text-5xl">VS</span>
      </div>
      <div class="w-2/5">
        <img class="w-full rounded-2xl mb-5" :src="getFirstImagePath(this.file2)">
        <p class="font-bold text-2xl mb-2">{{this.explanation2}}</p>
        <p class="font-bold text-3xl">{{this.insertComma(this.type2CntTotal)}}</p>
      </div>
    </div>
    <div class="flex border-t border-gray-300 px-5 py-5 mb-16">
      <span class="text-xl mr-3 font-bold">스레드 URL:</span>
      <a class="text-xl text-blue-400" :href="this.url">{{this.url}}</a>
    </div>
  </div>
</template>

<script>
import { useCommonStore,useContentsStore } from '@/_stores';

export default {
  setup() {
    const commonStore = useCommonStore()
    const contentsStore = useContentsStore()
    return {
      commonStore,
      contentsStore,
    }
  },
  components: {
  },
  data() {
    return {
      title: '',
      contents: '',
      explanation1: '',
      explanation2: '',
      file1:[],
      file2:[],
      url:'',
      viewCntToday: '',
      viewCntTotal: '',
      shareCntTotal: '',
      type1CntTotal: '',
      type2CntTotal: '',
    }
  },
  methods: {
    insertComma(num){
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getContents() {
      this.contentsStore.getById(this.contents).then((resp) => {
        if (resp.data.code == 200) {
          this.title = resp.data.body.title;
          this.explanation1 = resp.data.body.explanation1;
          this.explanation2 = resp.data.body.explanation2;
          this.url = resp.data.body.url;
          this.file1 = resp.data.body.file1;
          this.file2 = resp.data.body.file2;
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    getCnt() {
      this.contentsStore.getCnt(this.contents).then((resp) => {
        if (resp.data.code == 200) {
          if(resp.data.body.type1CntTotal !== null && resp.data.body.type1CntTotal !== undefined) {
            this.type1CntTotal = resp.data.body.type1CntTotal;
          }
          if(resp.data.body.type2CntTotal !== null && resp.data.body.type2CntTotal !== undefined) {
            this.type2CntTotal = resp.data.body.type2CntTotal;
          }
          if(resp.data.body.viewCntTotal !== null && resp.data.body.viewCntTotal !== undefined) {
            this.viewCntTotal = resp.data.body.viewCntTotal;
          }
          if(resp.data.body.viewCntToday !== null && resp.data.body.viewCntToday !== undefined) {
            this.viewCntToday = resp.data.body.viewCntToday;
          }
          if(resp.data.body.shareCntTotal !== null && resp.data.body.shareCntTotal !== undefined) {
            this.shareCntTotal = resp.data.body.shareCntTotal;
          }
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    removeContents(id){
      this.contentsStore.remove(id).then((resp) => {
        if (resp.data.code == 200) {
          alert('삭제되었습니다.');
          this.onChangePage(1);
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
  },
  created() {
    if (this.$route.query.key != null) {
      this.contents = this.$route.query.key;
      this.getContents();
      this.getCnt();
    }
    this.$parent.$parent.$refs.nav.activeBtn('contents');
  }
};
</script>
