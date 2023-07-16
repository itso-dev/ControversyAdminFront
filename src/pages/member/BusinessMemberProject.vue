<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">기업회원 관리</p>
    <!--  Member Name  -->
    <p class="mt-14 mb-4 text-2xl"><strong class="text-fuchsia-700">홍길동컴퍼니</strong> 기업회원 프로젝트</p>
    <!--  Buttons  -->
    <div class=" gap-3 mb-10">
     <span class="font-extrabold text-xl">00 건</span>
      <select class="float-right">
        <option>정렬</option>
        <option>완료</option>
        <option>진행 중</option>
      </select>
    </div>
    <!--  Project List   -->
    <div class="flex px-6 py-4 border-2 border-black rounded-xl w-full">
      <div class="w-2/3 flex border-r border-gray-400">
          <div class="w-2/3">
            <p class="font-bold mb-3 text-lg">프로젝트 함께 하실 인재를 모집합니다.</p>
            <p class="text-sm text-gray-400 mb-8">2023.01.01 ~ 2023.01.02</p>
            <p class="mb-2"><strong>분야</strong>: 0000000</p>
            <p class=""><strong>산업</strong>: 0000000</p>
          </div>
          <div class="w-1/3">
            <span class="bg-red-600 text-white rounded-xl px-6 py-2 mr-5">D-3</span>
            <span class="text-red-600 border border-red-600 rounded-xl px-6 py-2">좋아요</span>
            <p class="mt-5 mb-7"><i class="fas fa-heart text-red-500 mr-3"></i>99명이 관심을 갖고 있습니다.</p>
            <p class="text-sm font-bold">계약서 유</p>
          </div>
      </div>
      <div class="w-1/3 px-4">
        <div class="flex text-lg mb-3">
          <span class="w-1/2">지역</span>
          <span class="w-1/2">대한민국/충남</span>
        </div>
        <div class="flex text-lg mb-3">
          <span class="w-1/2">근무지 위치</span>
          <span class="w-1/2">아산, 인주</span>
        </div>
        <div class="flex text-lg">
          <span class="w-1/2">필요인원</span>
          <span class="w-1/2">00 원</span>
        </div>
      </div>
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
    modalOpen(type){
      document.getElementById('modalBg').classList.remove('hidden');
      switch (type){
        case 1:
          document.getElementById('stopModal').classList.remove('hidden');
          break;
        case 2:
          document.getElementById('quitModal').classList.remove('hidden');
          break;
      }
    },
    modalClose(type){
      document.getElementById('modalBg').classList.add('hidden');
      switch (type){
        case 1:
          document.getElementById('stopModal').classList.add('hidden');
          break;
        case 2:
          document.getElementById('quitModal').classList.add('hidden');
          break;
      }
    }
  },
  created() {
    this.$parent.$parent.$refs.nav.activeBtn('member');
  }
};
</script>
