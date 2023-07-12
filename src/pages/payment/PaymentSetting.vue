<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">결제 관리</p>
    <p class="mt-14 mb-4 text-2xl">결제 상세 내역</p>
    <table class="w-full border-collapse border border-slate-400">
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">구매자명</td>
        <td class="w-1/3 px-5 py-3">홍길동</td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">아이디</td>
        <td class="w-1/3 px-5 py-3">홍길동</td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">카테고리</td>
        <td class="w-1/3 px-5 py-3">월정액</td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">상품명</td>
        <td class="w-1/3 px-5 py-3">베이직</td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">결제일</td>
        <td class="w-1/3 px-5 py-3">2023.01.01</td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">상품기간</td>
        <td class="w-1/3 px-5 py-3">2023.01.01 ~ 2023.01.01</td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">결제 상태</td>
        <td class="w-1/3 px-5 py-3">결제 완료</td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">구분</td>
        <td class="w-1/3 px-5 py-3">기업 회원</td>
      </tr>
    </table>

    <span class="mt-20 block mx-auto w-1/6 text-center bg-blue-700 rounded-2xl text-white py-3 cursor-pointer">완료</span>
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
    this.$parent.$parent.$refs.nav.activeBtn('payment');
  }
};
</script>
