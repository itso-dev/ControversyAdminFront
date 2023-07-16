<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">블랙리스트 관리</p>
    <!--  Board Info  -->
    <div class="w-full mt-14">
      <div class="flex gap-4 border-black border-y-2  py-6">
        <div class="w-3/5">
          <span class="border-2 border-fuchsia-900 px-5 py-2 box-border rounded-xl mr-3 text-sm text-fuchsia-950">프리랜서</span>
          <span class="text-lg">제목 입니다.</span>
        </div>
        <div class="w-2/5">
          <span class="border-2 border-rose-800 bg-rose-600 text-white px-5 py-2 box-border rounded-xl mr-3 text-sm">잠수</span>
          <span class="text-lg mr-5"><i class="fas fa-user text-sm mr-2 text-gray-400"></i>홍길동</span>
          <span class="text-lg mr-5"><i class="far fa-calendar text-sm mr-2 text-gray-400"></i>2022.01.01</span>
          <span class="text-lg"><i class="far fa-eye text-sm mr-2 text-gray-400"></i>123</span>
        </div>
      </div>
      <div class="px-5 py-5 min-h-[300px]">
        게시글 내용이 작성됩니다. 게시글 내용이 작성됩니다.<br>
        게시글 내용이 작성됩니다. 게시글 내용이 작성됩니다.
      </div>
      <div class="border-b-2 mt-5 flex justify-center border-black pb-6">
        <div class="w-1/6 text-3xl text-center"><i class="far fa-thumbs-up text-blue-700"></i> 15</div>
        <div class="w-1/6 text-3xl text-center"><i class="far fa-thumbs-down text-red-700"></i> 4</div>
      </div>
    </div>
    <!--  Comment List  -->
    <div class="w-2/3 mx-auto mt-5 my-4">
      <div class="mb-5">
        <strong class="mr-3">@아이디01</strong>
        <span class="mr-5">안녕하세요 댓글입니다.</span>
        <span class="border rounded px-3 py-1 cursor-pointer bg-red-300 text-red-800 text-sm">삭제</span>
      </div>
      <div class="mb-5">
        <strong class="mr-3">@아이디01</strong>
        <span class="mr-5">안녕하세요 댓글입니다.</span>
        <span class="border rounded px-3 py-1 cursor-pointer bg-red-300 text-red-800 text-sm">삭제</span>
      </div>
    </div>
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
    this.$parent.$parent.$refs.nav.activeBtn('black');
  }
};
</script>
