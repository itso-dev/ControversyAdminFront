<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">문의 관리</p>
    <!--  Board Info  -->
    <div class="w-full mt-14 border-b border-black mb-10">
      <div class="flex gap-4 border-black border-y-2 px-5 py-6">
        <div class="w-full">
          <span class="text-lg mr-5"><i class="far fa-calendar text-sm mr-2 text-gray-400"></i>2022.01.01</span>
          <span class="text-lg mr-5"><i class="fas fa-user text-sm mr-2 text-gray-400"></i>홍길동</span>
          <span class="border-2 border-fuchsia-900 px-5 py-2 box-border rounded-xl mr-3 text-sm text-fuchsia-950">일반</span>
          <span class="text-lg">제목이 노출되는 영역입니다.</span>

        </div>
      </div>
      <div class="px-5 py-5 min-h-[300px]">
        게시글 내용이 작성됩니다. 게시글 내용이 작성됩니다.<br>
        게시글 내용이 작성됩니다. 게시글 내용이 작성됩니다.
      </div>
    </div>
    <!--  Answer List  -->
    <div class="w-2/3 mx-auto flex  mt-5 my-4 items-center">
      <span class="mr-3 w-1/12 inline-block font-bold">답변작성</span>
      <input type="input"
             class="mr-3 w-5/6 border border-gray-400 px-5 py-2 "/>
      <span class="w-1/12 inline-block bg-blue-950 text-white text-center py-2.5 rounded-2xl cursor-pointer">등록</span>
    </div>
    <div class="text-center">
      <span class="mt-20 inline-block mx-auto w-1/12 text-center bg-blue-700 rounded-2xl text-white py-3 mr-3 cursor-pointer">확인</span>
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
    this.$parent.$parent.$refs.nav.activeBtn('contact');
  }
};
</script>
