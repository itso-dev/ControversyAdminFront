<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">게시판 관리</p>
    <!--  Tab  -->
    <div class="flex gap-4 mb-10">
      <span class="w-1/6 text-center py-3 border-2 border-fuchsia-950 font-bold cursor-pointer rounded-lg"
        :class="this.tabYn ? '' : 'bg-fuchsia-950 text-white'" @click="this.tabYn = !this.tabYn"
      >Know-how</span>
      <span class="w-1/6 text-center py-3 border-2 border-fuchsia-950 font-bold cursor-pointer rounded-lg"
          :class="this.tabYn ? 'bg-fuchsia-950 text-white' : '' " @click="this.tabYn = !this.tabYn"
      >자유홍보</span>
    </div>
    <!--  노하우   -->
    <div v-if="!tabYn">
      <!--  Search  -->
      <div class="w-1/4 flex gap-3 mb-5">
        <input class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               type="text" placeholder="노하우 게시글 검색" />
        <input class="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               type="submit" value="검색" />
      </div>
      <!--  Table List  -->
      <table class="w-full table-auto border-collapse text-center">
        <thead class="border-y border-black">
        <tr>
          <th class="py-3">번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>추천</th>
          <th>비추천</th>
          <th>등록일</th>
          <th>조회수</th>
        </tr>
        </thead>
        <tbody>
        <tr class="cursor-pointer hover:bg-gray-100 border-b border-b-gray-200"
        >
          <td class="py-3"><input type="checkbox"></td>
          <td>제목입니다 제목입니다 제목입니다.</td>
          <td>000</td>
          <td>000</td>
          <td>O</td>
          <td>2023.01.02</td>
          <td>O</td>
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
    <!--   자유홍보   -->
    <div v-if="tabYn">
      <!--  Search  -->
      <div class="w-1/4 flex gap-3 mb-5">
        <input class="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               type="text" placeholder="자유홍보 게시글 검색" />
        <input class="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               type="submit" value="검색" />
      </div>
      <!--  Table List  -->
      <div class="w-full flex gap-10 px-5 py-7 border-2 border-gray-400 rounded-lg mb-4">
        <div class="w-1/3">
          <img class="w-full border border-gray-400">
        </div>
        <div class="w-2/3">
          <span class="border-r-2 border-gray-500 mr-3 pr-3 ">22.02.02</span>
          <span class="text-gray-400">12명 읽음</span>
          <p class="mt-3 mb-5 text-lg font-bold">게시글 제목이 들어갑니다.</p>
          <p>게시글 내용이 미리보기로 보여지는 영역입니다. 게시글 내용이 미리보기로 보여지는 영역입니다. 게시글 내용이 미리보기로 보여지는 영역입니다.</p>
        </div>
      </div>
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
  </div>

</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      tabYn: false,
    }
  },
  methods: {
  },
  created() {
    this.$parent.$parent.$refs.nav.activeBtn('board');
  }
};
</script>
