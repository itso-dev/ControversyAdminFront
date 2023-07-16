<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">담당자 관리</p>
    <!--  Buttons  -->
    <div class="mt-12 mb-5">
         <span
             class="inline-block px-5 py-1.5 rounded-lg bg-blue-400 text-white mr-3 hover:bg-blue-500 cursor-pointer">
          선택 삭제
      </span>
      <router-link :to="{ name: 'ManagerSetting', query: {} }"
                   class="inline-block px-5 py-1.5 rounded-lg bg-fuchsia-700 text-white float-right hover:bg-fuchsia-800 cursor-pointer">
        아이디 등록
      </router-link>
    </div>
    <!--  Table List  -->
    <table class="w-full table-auto border-collapse text-center">
      <thead class="border-y border-black">
        <tr>
          <th class="py-3">선택</th>
          <th>담당자 명</th>
          <th>ID</th>
          <th>생성일</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cursor-pointer hover:bg-gray-100 border-b border-b-gray-200"
            @click="$router.push('/manager/setting')">
            <td class="py-3"><input type="checkbox"></td>
            <td>홍길동</td>
            <td>test123</td>
            <td>2023.01.01</td>
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
    this.$parent.$parent.$refs.nav.activeBtn('manager');
  }
};
</script>
