<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">결제 관리</p>
    <!--  Buttons  -->
    <div class="mt-12 mb-5">
      <span
          class="inline-block px-5 py-1.5 rounded-lg bg-green-700 text-white hover:bg-green-800 cursor-pointer">
          엑셀 다운
      </span>
    </div>
    <!--  Table List  -->
    <table class="w-full table-auto border-collapse text-center">
      <thead class="border-y border-black">
        <tr>
          <th class="py-3">결제일</th>
          <th>아이디</th>
          <th>구분</th>
          <th class="cursor-pointer">상태 <i class="fas fa-sort-down align-top"></i></th>
          <th>상품명</th>
          <th>시작일시</th>
          <th>종료일시</th>
          <th>금액</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cursor-pointer hover:bg-gray-100 border-b border-b-gray-200"
            @click="$router.push('/payment/detail')">
            <td class="py-3">2023.01.01</td>
            <td>test1234</td>
            <td>일반회원</td>
            <td>결제대기</td>
            <td>상품명이 들어갑니다</td>
            <td>2023.01.01</td>
            <td>2023.01.01</td>
            <td>66,000 원</td>
        </tr>
      </tbody>
    </table>
    <!-- Paging -->
    <div class="m-auto w text-center flex justify-center gap-3 text-lg mt-10">
      <a class="bg-gray-200 px-3 py-1"
      ><i class="fas fa-chevron-left"></i></a>
      <a class="bg-gray-400 px-3 py-1 font-bold"
      >1</a>
      <a class="bg-gray-200 px-3 py-1"
      >2</a>
      <a class="bg-gray-200 px-3 py-1"
      >3</a>
      <a class="bg-gray-200 px-3 py-1"
      >4</a>
      <a class="bg-gray-200 px-3 py-1"
      >5</a>
      <a class="bg-gray-200 px-3 py-1"
      ><i class="fas fa-chevron-right"></i></a>
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
    this.$parent.$parent.$refs.nav.activeBtn('payment');
  }
};
</script>
