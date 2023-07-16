<template>
    <div class="px-8 py-8 ">
      <p class="text-2xl font-bold mb-14">홈</p>
      <!--   요약   -->
      <div class="mb-10">
        <strong class="text-xl">요약</strong>
        <div class="float-right">
          <input type="date" />
          <span class="mx-3">~</span>
          <input type="date" />
        </div>
      </div>
      <table class="border-collapse border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/3 font-bold py-3 border-r border-black">방문자 수</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">결제 건 수</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">결제 금액</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 명</td>
          <td class=" border-r border-black">00 건</td>
          <td class=" border-r border-black">00 원</td>
        </tr>
      </table>
      <table class="border-collapse border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/3 font-bold py-3 border-r border-black">일반회원 수</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">기업회원 수</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">등록된 프로젝트</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
          <td class=" border-r border-black">00 건</td>
        </tr>
      </table>
      <table class="border-collapse table-auto border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/3 font-bold py-3 border-r border-black">완료 프로젝트</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">문의 건수</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">등록된 게시물 수</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 명</td>
          <td class=" border-r border-black">00 건</td>
          <td class=" border-r border-black">00 건</td>
        </tr>
      </table>
      <!--   회원   -->
      <div class="mb-10 mt-16">
        <strong class="text-xl">회원</strong>
        <div class="float-right">
          <input type="date" />
          <span class="mx-3">~</span>
          <input type="date" />
        </div>
      </div>
      <table class="border-collapse table-auto border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/3 font-bold py-3 border-r border-black">총 일반 회원</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">총 기업 회원</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">청 회원 수</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
        </tr>
      </table>
      <table class="border-collapse table-auto border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/2 font-bold py-3 border-r border-black">한국인</td>
          <td class="bg-gray-300 w-1/2 font-bold border-r border-black">외국인</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
        </tr>
      </table>
      <!--   요일별 방문자 수   -->
      <div class="mb-10 mt-16">
        <strong class="text-xl">요일별 방문자 수</strong>
        <div class="float-right">
          <input type="date" />
          <span class="mx-3">~</span>
          <input type="date" />
        </div>
      </div>
      <table class="border-collapse table-auto border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/7 font-bold py-3 border-r border-black">월</td>
          <td class="bg-gray-300 w-1/7 font-bold border-r border-black">화</td>
          <td class="bg-gray-300 w-1/7 font-bold border-r border-black">수</td>
          <td class="bg-gray-300 w-1/7 font-bold border-r border-black">목</td>
          <td class="bg-gray-300 w-1/7 font-bold border-r border-black">금</td>
          <td class="bg-gray-300 w-1/7 font-bold border-r border-black">토</td>
          <td class="bg-gray-300 w-1/7 font-bold border-r border-black">일</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
          <td class=" border-r border-black">00 명</td>
        </tr>
      </table>
      <!--   프로젝트   -->
      <div class="mb-10 mt-16">
        <strong class="text-xl">프로젝트</strong>
        <div class="float-right">
          <router-link :to="{ name: 'ProjectList', query: {} }" class="py-3 px-4 mr-3 rounded bg-blue-500 text-white">전체보기</router-link>
          <input type="date" />
          <span class="mx-3">~</span>
          <input type="date" />
        </div>
      </div>
      <table class="border-collapse table-auto border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/3 font-bold py-3 border-r border-black">총 프로젝트</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">진행중 프로젝트</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">완료 프로젝트</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 건</td>
          <td class=" border-r border-black">00 건</td>
          <td class=" border-r border-black">00 건</td>
        </tr>
      </table>
      <!--   배너   -->
      <div class="mb-10 mt-16">
        <strong class="text-xl">배너</strong>
        <div class="float-right">
          <router-link :to="{ name: 'BannerList', query: {} }" class="py-3 px-4 mr-3 rounded bg-blue-500 text-white">전체보기</router-link>
          <input type="date" />
          <span class="mx-3">~</span>
          <input type="date" />
        </div>
      </div>
      <table class="border-collapse table-auto border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/3 font-bold py-3 border-r border-black">노출 수</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">클릭 수</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">클릭 률</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 건</td>
          <td class=" border-r border-black">00 건</td>
          <td class=" border-r border-black">00 %</td>
        </tr>
      </table>
      <!--   문의   -->
      <div class="mb-10 mt-16">
        <strong class="text-xl">문의</strong>
        <div class="float-right">
          <router-link :to="{ name: 'ContactList', query: {} }" class="py-3 px-4 mr-3 rounded bg-blue-500 text-white">전체보기</router-link>
          <input type="date" />
          <span class="mx-3">~</span>
          <input type="date" />
        </div>
      </div>
      <table class="border-collapse table-auto border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/3 font-bold py-3 border-r border-black">문의 건수</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">답변 문의 건수</td>
          <td class="bg-gray-300 w-1/3 font-bold border-r border-black">미답변 문의 건수</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 건</td>
          <td class=" border-r border-black">00 건</td>
          <td class=" border-r border-black">00 %</td>
        </tr>
      </table>
      <!--   결제   -->
      <div class="mb-10 mt-16">
        <strong class="text-xl">결제</strong>
        <div class="float-right">
          <router-link :to="{ name: 'PaymentList', query: {} }" class="py-3 px-4 mr-3 rounded bg-blue-500 text-white">전체보기</router-link>
          <input type="date" />
          <span class="mx-3">~</span>
          <input type="date" />
        </div>
      </div>
      <table class="border-collapse table-auto border-2 border-black w-full text-center mb-3">
        <tr>
          <td class="bg-gray-300 w-1/2 font-bold py-3 border-r border-black">결제 건수</td>
          <td class="bg-gray-300 w-1/2 font-bold border-r border-black">결제 금액</td>
        </tr>
        <tr>
          <td class="py-3 border-r border-black">00 건</td>
          <td class=" border-r border-black">00 건</td>
        </tr>
      </table>
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
      this.$parent.$parent.$refs.nav.activeBtn('home');
    }
};
</script>
