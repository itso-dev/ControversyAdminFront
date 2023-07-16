<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">알림 관리</p>
    <!--  Insert Form  -->
    <p class="mb-3 font-bold text-lg">알림명</p>
    <input type="text" placeholder="알림명을 입력해주세요"
      class="w-full mb-7">
    <p class="mb-3 font-bold text-lg">수신자</p>
    <select class="mb-7 w-1/6">
      <option value="전체">전체</option>
    </select>
    <p class="mb-3 font-bold text-lg">메시지</p>
    <textarea class="w-full mb-5 min-h-[300px]" placeholder="메시지 입력"></textarea>

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
    this.$parent.$parent.$refs.nav.activeBtn('alert');
  }
};
</script>
