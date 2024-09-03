<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">콘텐츠 관리</p>
    <!--  Buttons  -->
    <div class="mt-12 mb-5">
<!--      <span @click="this.contents_list.forEach(i => i.chk = true)"-->
<!--            class="inline-block px-5 py-1.5 rounded-lg bg-blue-400 text-white mr-3 hover:bg-blue-500 cursor-pointer">-->
<!--          전체 선택-->
<!--      </span>-->
<!--      <span @click="removeContentsList"-->
<!--            class="inline-block px-5 py-1.5 rounded-lg bg-blue-400 text-white mr-3 hover:bg-blue-500 cursor-pointer">-->
<!--          선택 삭제-->
<!--      </span>-->
      <router-link :to="{ name: 'ContentsSetting', query: {} }"
                   class="inline-block px-5 py-1.5 rounded-lg bg-fuchsia-700 text-white hover:bg-fuchsia-800 cursor-pointer">
        등록하기
      </router-link>
    </div>
    <!--  Table List  -->
    <table class="w-full table-auto border-collapse text-center">
      <thead class="border-y border-black">
        <tr>
<!--          <th class="py-3">선택</th>-->
          <th class="py-3">콘텐츠 제목</th>
          <th>생성일</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="cursor-pointer hover:bg-gray-100 border-b border-b-gray-200"
            v-for="item in this.contents_list">
<!--          <td class="py-3"><input type="checkbox" :checked="item.chk" @click="item.chk = !item.chk"></td>-->
          <td class="py-3">
            <span class="cursor-pointer" @click="goToDetail('ContentsDetail', item.contents)">
                {{ item.title }}
            </span>
          </td>
          <td class="cursor-pointer">{{ formattedDate(item.reg_date) }}</td>
          <td>
            <span class="mr-5 text-2xl cursor-pointer" @click="removeContents(item.contents)">
                <i class="fas fa-trash-alt"></i>
            </span>
            <span class=" text-2xl cursor-pointer" @click="goToDetail('ContentsSetting', item.contents)">
                <i class="fas fa-pencil-alt"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Paging -->
    <div class="m-auto w text-center flex justify-center gap-3 text-lg mt-10">
      <a class="bg-gray-200 px-3 py-1" v-if="this.contents_pages.start !== 1" @click="onChangePage(this.contents_pages.start - 1)">
        <i class="fas fa-chevron-left"></i>
      </a>
      <a class="bg-gray-400 px-3 py-1" :class="this.contents_pages.page == page ? 'font-bold' : ''" v-for="page in this.contents_pages.pagesList"
         @click="onChangePage(page)">
        {{ page }}
      </a>
      <a class="bg-gray-200 px-3 py-1" v-if="this.contents_pages.end !== this.contents_pages.end_page + 1"
         @click="onChangePage(this.contents_pages.start + this.contents_pages.num_block)">
        <i class="fas fa-chevron-right"></i>
      </a>
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
      contents_list: [],
      contents_list_total: 0,
      contents_pages: {
        page: 1,
        page_block: 10,
        start: 9999,
        end: 1,
        end_page: 1,
        pagesList: [],
        num_block: 5,
      },
    }
  },
  methods: {
    getContentsList() {
      let params = {
      }
      this.contentsStore.list(params, {}).then((resp) => {
        console.log(resp.data.code == 200);
        if (resp.data.code == 200) {
          this.contents_list = resp.data.body;
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
    removeContentsList(){
      let keyList = this.contents_list.filter(i => i.chk).map(i => i.notice);
      this.contentsStore.remove({keyList:keyList}).then((resp) => {
        if (resp.data.code == 200) {
          alert('삭제되었습니다.');
          this.onChangePage(1);
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    onChangePage(page){
      this.contents_pages.page = page;
      this.getContentsList();
    },
  },
  created() {
    this.getContentsList();
    this.$parent.$parent.$refs.nav.activeBtn('contents');
  }
};
</script>
