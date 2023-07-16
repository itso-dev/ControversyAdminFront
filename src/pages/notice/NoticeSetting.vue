<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">공지사항 관리</p>
    <!--  Insert Form  -->
    <input type="text" placeholder="제목을 입력해주세요"
      class="w-full mb-7">
    <textarea class="w-full mb-5 min-h-[300px]"></textarea>
    <label class="block mb-5 border border-gray-300 px-5 py-3">
      <span class="sr-only">Choose profile photo</span>
      <input type="file" class="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "/>
    </label>
    <label class="block mb-5 border border-gray-300 px-5 py-3">
      <span class="sr-only">Choose profile photo</span>
      <input type="file" class="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "/>
    </label>
    <div class="text-center">
      <span class="mt-20 inline-block mx-auto w-1/12 text-center bg-blue-700 rounded-2xl text-white py-3 mr-3 cursor-pointer">완료</span>
      <span class="mt-20 inline-block mx-auto w-1/12 text-center bg-gray-700 rounded-2xl text-white py-3 cursor-pointer">취소</span>
    </div>
  </div>

</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    modalOpen(){
      document.getElementById('modalBg').classList.remove('hidden');
      document.getElementById('rejectModal').classList.remove('hidden');
    },
    modalClose(){
      document.getElementById('modalBg').classList.add('hidden');
      document.getElementById('rejectModal').classList.add('hidden');
    }
  },
  created() {
    this.$parent.$parent.$refs.nav.activeBtn('notice');
  }
};
</script>
