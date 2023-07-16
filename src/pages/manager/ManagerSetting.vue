<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">담당자 관리</p>
    <!--  Insert Form  -->
    <p class="mb-3 font-bold text-lg">아이디</p>
    <input type="text" placeholder="아이디를 입력해주세요"
           class="w-full mb-7">
    <p class="mb-3 font-bold text-lg">비밀번호</p>
    <input type="text" placeholder="비밀번호를 입력해주세요"
           class="w-full mb-7">
    <p class="mb-3 font-bold text-lg">이름</p>
    <input type="text" placeholder="이름을 입력해주세요"
           class="w-full mb-7">
    <p class="mb-3 font-bold text-lg">전화번호</p>
    <input type="text" placeholder="전화번호를 입력해주세요"
           class="w-2/5 mb-7">
    <span class="py-3 px-4 bg-gray-400 ml-4 rounded cursor-pointer">인증하기</span>
    <div class="text-center">
      <span class="mt-20 inline-block mx-auto w-1/12 text-center bg-blue-700 rounded-2xl text-white py-3 mr-3 cursor-pointer">등록하기</span>
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
    this.$parent.$parent.$refs.nav.activeBtn('manager');
  }
};
</script>
