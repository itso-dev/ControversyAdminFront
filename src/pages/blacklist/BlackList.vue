<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">블랙리스트 관리</p>
    <!--  Search  -->
    <div class="w-1/4 flex gap-3">
      <input class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             type="text" placeholder="제목 검색" />
      <input class="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             type="submit" value="검색" />
    </div>
    <!--  Buttons  -->
    <div class="mt-12 mb-5">
      <span
          @click="this.filter(1)"
          :class=" this.filterYn[0] ? 'bg-blue-400 text-white' : ''"
          class="inline-block px-5 py-1.5 rounded-lg border-2 border-blue-500 mr-3 hover:bg-blue-500 hover:text-white cursor-pointer text-center w-[100px]">
          전체
      </span>
      <span
          @click="this.filter(2)"
          :class=" this.filterYn[1] ? 'bg-blue-400 text-white' : ''"
          class="inline-block px-5 py-1.5 rounded-lg border-2 border-blue-500 mr-3 hover:bg-blue-500 hover:text-white cursor-pointer text-center w-[100px]">
          업체
      </span>
      <span
          @click="this.filter(3)"
          :class=" this.filterYn[2] ? 'bg-blue-400 text-white' : ''"
          class="inline-block px-5 py-1.5 rounded-lg border-2 border-blue-500 mr-3 hover:bg-blue-500 hover:text-white cursor-pointer text-center w-[100px]">
          프리랜서
      </span>
      <select class="float-right">
        <option value="전체">전체</option>
        <option value="잠수">잠수</option>
        <option value="사기">사기</option>
        <option value="대금 미지급">대금 미지급</option>
        <option value="기타">기타</option>
      </select>
    </div>
    <!--  Table List  -->
    <table class="w-full table-auto border-collapse text-center">
      <thead class="border-y border-black">
        <tr>
          <th class="py-3">번호</th>
          <th>분류</th>
          <th>피해사례</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일</th>
          <th>조회수</th>
          <th class="cursor-pointer">승인 <i class="fas fa-sort-down align-top"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr class="cursor-pointer hover:bg-gray-100 border-b border-b-gray-200"
            @click="$router.push('/blacklist/detail')">
          <td class="py-3">1</td>
          <td>프리랜서</td>
          <td>잠수</td>
          <td>제목 입니다.</td>
          <td>홍길동</td>
          <td>2023.01.01</td>
          <td>32</td>
          <td>승인</td>
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
      filterYn: [true, false, false],

    }
  },
  methods: {
    filter(type){
      switch(type){
        case 1:
          this.filterYn = [true, false, false];
          break;
        case 2:
          this.filterYn = [false, true, false];
          break;
        case 3:
          this.filterYn = [false, false, true];
          break;
      }
    },
  },
  created() {
    this.$parent.$parent.$refs.nav.activeBtn('black');
  }
};
</script>
