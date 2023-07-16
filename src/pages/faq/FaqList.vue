<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">FAQ 관리</p>
    <!--  Buttons  -->
    <div class="mt-12 mb-5">
      <router-link :to="{ name: 'FaqSetting', query: {} }"
                   class="inline-block px-5 py-1.5 rounded-lg bg-fuchsia-700 text-white hover:bg-fuchsia-800 cursor-pointer">
        등록하기
      </router-link>
    </div>
    <!--  FAQ List  -->
    <div class="flex gap-3">
      <div class="cursor-pointer w-2/3 border border-gray-400">
        <div class="px-3 py-3 box-border">
          <span class="font-bold text-lg ">질문내용 입니다.</span>
          <i class="fas fa-chevron-down float-right text-xl"></i>
        </div>
        <div class="border-t border-gray-400 px-3 py-3 text-sm min-h-[100px]">
          답글이 작성되는 영역입니다.
        </div>
      </div>
      <div class="mt-2">
        <span class="px-4 py-2 text-sm bg-red-700 text-white float-right inline-block box-border cursor-pointer">삭제</span>
        <span class="px-4 py-2 text-sm bg-blue-700 text-white float-right inline-block box-border cursor-pointer mr-3">수정</span>
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
  },
  created() {
    this.$parent.$parent.$refs.nav.activeBtn('faq');
  }
};
</script>
