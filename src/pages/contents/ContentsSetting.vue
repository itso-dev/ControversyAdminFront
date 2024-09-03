<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">콘텐츠 등록</p>
    <table class="w-full border-collapse border border-slate-400">
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">콘텐츠 제목</td>
        <td class="w-1/3 px-5 py-3">
          <input type="text" placeholder="콘텐츠 제목을 입력하세요" v-model="this.title"
          class="border-none outline-none w-full">
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">스레드 URL</td>
        <td class="w-1/3 px-5 py-3">
          <input type="text" placeholder="스레드 URL을 입력하세요" v-model="this.url"
                 class="border-none outline-none w-full">
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">A 항목</td>
        <td class="w-1/3 px-5 py-3">
          <input type="text" placeholder="A 항목의 설명글을 입력세요" v-model="this.explanation1"
                 class="border-none outline-none w-full">
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">A 이미지</td>
        <td class="w-1/3 px-5 py-3">
          <span class="inline-block text-sm px-4 py-2 cursor-pointer rounded-full text-violet-700 font-bold bg-violet-50 hover:file:bg-violet-100"
                 @click="addFiles(this.$refs.file1_new);" v-if="(this.file1_new.length + this.file1.length) === 0"
          >파일 선택</span>
          <input type="file"
                 v-on:change="handleUpload(this.$refs.file1_new.files, this.file1_new)"
                 class="hidden"
                 id="file1_new" name="file1_new" ref="file1_new"
          />
          <div class="file-list" v-for="(file, index) in this.file1">
            <span>{{ file.name }}<i class="fas fa-times ml-3 cursor-pointer" @click="removeFile(this.file1, index)"></i></span>
          </div>
          <div class="file-list" v-for="(file, index) in this.file1_new">
            <span>{{ file.name }}<i class="fas fa-times ml-3 cursor-pointer" @click="removeFile(this.file1_new, index)"></i></span>
          </div>
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">B 항목</td>
        <td class="w-1/3 px-5 py-3">
          <input type="text" placeholder="B 항목의 설명글을 입력세요" v-model="this.explanation2"
                 class="border-none outline-none w-full">
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">B 이미지</td>
        <td class="w-1/3 px-5 py-3">
          <span class="inline-block text-sm px-4 py-2 cursor-pointer rounded-full text-violet-700 font-bold bg-violet-50 hover:file:bg-violet-100"
                @click="addFiles(this.$refs.file2_new);" v-if="(this.file2_new.length + this.file2.length) === 0"
          >파일 선택</span>
            <input type="file"
                   v-on:change="handleUpload(this.$refs.file2_new.files, this.file2_new)"
                   class="hidden"
               id="file2_new" name="file2_new" ref="file2_new"
            />
            <div class="file-list" v-for="(file, index) in this.file2">
              <span>{{ file.name }}<i class="fas fa-times ml-3 cursor-pointer" @click="removeFile(this.file2, index)"></i></span>
            </div>
            <div class="file-list" v-for="(file, index) in this.file2_new">
              <span>{{ file.name }}<i class="fas fa-times ml-3 cursor-pointer" @click="removeFile(this.file2_new, index)"></i></span>
            </div>
        </td>
      </tr>
    </table>

    <span class="mt-20 block mx-auto w-1/6 text-center bg-blue-700 rounded-2xl text-white py-3" @click="saveContents()">완료</span>
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
  data() {
    return {
      title: '',
      contents: 0,
      explanation1: '',
      explanation2: '',
      file1:[],
      file2:[],
      file1_new:[],
      file2_new:[],
      url:'',
    }
  },
  methods: {
    removeFile(fileList, key) {
      fileList.splice(key, 1);
    },
    addFiles(target, type){
      target.click();
      if(type === 1){
        this.removeFile(this.thumb_new, 0)
      }
    },
    handleUpload(targetList, fileList) {
      /*
        Adds the uploaded file to the files array
      */
      for (var i = 0; i < targetList.length; i++) {
        fileList.push(targetList[i]);
      }
    },
    getContents() {
      this.contentsStore.getById(this.contents).then((resp) => {
        if (resp.data.code == 200) {
          this.title = resp.data.body.title;
          this.explanation1 = resp.data.body.explanation1;
          this.explanation2 = resp.data.body.explanation2;
          this.url = resp.data.body.url;
          this.file1 = JSON.parse(resp.data.body.file1);
          this.file2 = JSON.parse(resp.data.body.file2);
        }
      }).catch(err => {
        console.log("err", err);
      });
    },
    saveContents() {
      console.log(this.file1_new);


      let paramData = new FormData();
      paramData.append("title", this.title);
      paramData.append("url", this.url);
      paramData.append("explanation1", this.explanation1);
      paramData.append("explanation2", this.explanation2);

      for (var i = 0; i < this.file1_new.length; i++) {
        paramData.append('file1_new', this.file1_new[i]);
      }
      for (var i = 0; i < this.file2_new.length; i++) {
        paramData.append('file2_new', this.file2_new[i]);
      }

      if(this.contents === 0){
        this.contentsStore.save(paramData).then((resp) => {
          if (resp.data.code == 200) {
            alert('등록되었습니다.');
            this.goToPage('ContentsList');
          }
        }).catch(err => {
          console.log("err", err);
        });
      } else {
        if(this.file1_new.length !== 0){
          paramData.append("file1_new", JSON.stringify(this.file1_new));
        }
        if(this.file2_new.length !== 0){
          paramData.append("file2_new", JSON.stringify(this.file2_new));
        }
        this.contentsStore.modify(this.contents, paramData).then((resp) => {
          if (resp.data.code == 200) {
            alert('수정되었습니다.');
            this.goToPage('ContentsList');
          }
        }).catch(err => {
          console.log("err", err);
        });
      }
    },
  },
  created() {
    if (this.$route.query.key != null) {
      this.contents = this.$route.query.key;
      this.getContents();
    }
    this.$parent.$parent.$refs.nav.activeBtn('contents');
  }
};
</script>
