<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">알림 관리</p>
    <!--  Search  -->
    <div class="w-1/4 flex gap-3">
      <input class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             type="text" placeholder="알림명 검색" />
      <input class="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             type="submit" value="검색" />
    </div>
    <!--  Buttons  -->
    <div class="mt-12 mb-5">
      <span
          class="inline-block px-5 py-1.5 rounded-lg bg-blue-400 text-white mr-3 hover:bg-blue-500 cursor-pointer">
          전체 선택
      </span>
      <span
          class="inline-block px-5 py-1.5 rounded-lg bg-blue-400 text-white mr-3 hover:bg-blue-500 cursor-pointer">
          선택 삭제
      </span>
      <router-link :to="{ name: 'AlertSetting', query: {} }"
                   class="inline-block px-5 py-1.5 rounded-lg bg-fuchsia-700 text-white float-right hover:bg-fuchsia-800 cursor-pointer">
        등록하기
      </router-link>
    </div>
    <!--  Table List  -->
    <table class="w-full table-auto border-collapse text-center">
      <thead class="border-y border-black">
        <tr>
          <th class="py-3">선택</th>
          <th>작성일</th>
          <th class="cursor-pointer">수신 <i class="fas fa-sort-down align-top"></i></th>
          <th>알림명</th>
          <th>메시지</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cursor-pointer hover:bg-gray-100 border-b border-b-gray-200"
            @click="$router.push('/alert/setting')">
          <td class="py-3"><input type="checkbox"></td>
          <td>2023.01.01</td>
          <td>전체</td>
          <td>알림명입니다.</td>
          <td>메시지 표시</td>
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
    this.$parent.$parent.$refs.nav.activeBtn('alert');
  }
};
</script>
