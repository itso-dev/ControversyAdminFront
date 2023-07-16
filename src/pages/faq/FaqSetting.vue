<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">FAQ 관리</p>
    <!--  Insert Form  -->
    <p class="mb-3 font-bold text-lg">질문내용</p>
    <input type="text" placeholder="질문 내용을 입력해주세요"
      class="w-full mb-7">
    <p class="mb-3 font-bold text-lg">답변내용</p>
    <textarea class="w-full mb-5 min-h-[300px]" placeholder="답변 내용을 입력해주세요"></textarea>

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
  },
  created() {
    this.$parent.$parent.$refs.nav.activeBtn('alert');
  }
};
</script>
