<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">팝업 관리</p>
    <table class="w-full border-collapse border border-slate-400">
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">시작 일자</td>
        <td class="w-1/3 px-5 py-3">
          <input type="date" class="border-none outline-none w-full">
        </td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">종료 일자</td>
        <td class="w-1/3 px-5 py-3">
          <input type="date" class="border-none outline-none w-full">
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">팝업 명</td>
        <td class="w-1/3 px-5 py-3">
          <input type="text" placeholder="팝업 명을 입력하세요"
          class="border-none outline-none w-full">
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">URL</td>
        <td class="w-1/3 px-5 py-3">
          <input type="text" placeholder="팝업에 삽입 할 URL을 입력하세요"
                 class="border-none outline-none w-full">
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">이미지 등록</td>
        <td class="w-1/3 px-5 py-3">
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input type="file" class="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "/>
          </label>
        </td>
      </tr>
    </table>
    <div class="text-center">
      <span class="mt-20 inline-block mx-auto w-1/12 text-center bg-blue-700 rounded-2xl text-white py-3 mr-3 cursor-pointer">승인</span>
      <span class="mt-20 inline-block mx-auto w-1/12 text-center bg-red-700 rounded-2xl text-white py-3 cursor-pointer" @click="this.modalOpen()">반려</span>
      <span class="mt-20 inline-block mx-auto w-1/12 text-center bg-gray-700 rounded-2xl text-white py-3 cursor-pointer float-right">목록</span>
    </div>
  </div>

  <!-- Modal -->
  <div id="modalBg" class="model fixed w-full h-full z-10 bg-black opacity-50 top-0 left-0 hidden"></div>
  <!--  반려 Modal  -->
  <div id="rejectModal" class="model fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl px-6 py-4 w-[500px] hidden">
    <p class="text-center font-bold text-xl mb-5">반려 사유 작성</p>
    <textarea class="w-full border border-2 border-black h-[200px]" placeholder="반려 사유를 작성하세요."></textarea>
    <div class="flex gap-4 m-auto justify-center mt-8">
      <span class="px-3 py-2 bg-blue-500 text-white rounded-xl w-1/3 text-center cursor-pointer" @click="this.modalClose()">취소</span>
      <span class="px-3 py-2 bg-blue-500 text-white rounded-xl w-1/3 text-center cursor-pointer">확인</span>
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
    this.$parent.$parent.$refs.nav.activeBtn('popup');
  }
};
</script>
