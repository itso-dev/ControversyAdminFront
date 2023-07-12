<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">회원 관리</p>
    <!--  Member Name  -->
    <p class="mt-14 mb-4 text-2xl"><strong class="text-fuchsia-700">홍길동</strong> 회원정보</p>
    <!--  Buttons  -->
    <div class="flex gap-3 mb-3">
      <span class="px-8 py-1.5 rounded-lg bg-blue-400 text-white hover:bg-blue-500 cursor-pointer"
            @click="this.modalOpen(1)"
      >정지</span>
      <span class="px-8 py-1.5 rounded-lg bg-blue-400 text-white hover:bg-blue-500 cursor-pointer"
            @click="this.modalOpen(2)"
      >탈퇴</span>
      <span class="px-8 py-1.5 rounded-lg bg-blue-400 text-white hover:bg-blue-500 cursor-pointer"
      >쿠폰</span>
    </div>
    <!--  Member Info   -->
    <table class="w-full border-collapse border border-slate-400">
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">가입일</td>
        <td class="w-1/3 px-5 py-3">2023.01.01</td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">탈퇴일</td>
        <td class="w-1/3 px-5 py-3"></td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">국적</td>
        <td class="w-1/3 px-5 py-3"></td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">이름</td>
        <td class="w-1/3 px-5 py-3"></td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">이메일</td>
        <td class="w-1/3 px-5 py-3"></td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">닉네임</td>
        <td class="w-1/3 px-5 py-3"></td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">생년월일</td>
        <td class="w-1/3 px-5 py-3"></td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">휴대폰번호</td>
        <td class="w-1/3 px-5 py-3"></td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">주소</td>
        <td class="w-1/3 px-5 py-3"></td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">상세주소</td>
        <td class="w-1/3 px-5 py-3"></td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">외국인등록번호</td>
        <td class="w-1/3 px-5 py-3"></td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">외국인등록증</td>
        <td class="w-1/3 px-5 py-3"></td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">이력서</td>
        <td class="w-1/3 px-5 py-3">
          <a class="text-blue-500">이력서.pdf</a>
        </td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">활동점수내역</td>
        <td class="w-1/3 px-5 py-3">000,000</td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">매칭횟수</td>
        <td class="w-1/3 px-5 py-3">00 회</td>
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">사용중 서비스</td>
        <td class="w-1/3 px-5 py-3">월정액 권</td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">잔여사용일</td>
        <td class="w-1/3 px-5 py-3">00 일</td>
      </tr>
    </table>
    <!--  Pay List  -->
    <p class="mt-14 mb-4 text-2xl">결제내역</p>
    <table class="w-full table-auto border-collapse text-center">
      <thead class="border-y border-black">
      <tr>
        <th class="py-3">결제일</th>
        <th>서비스명</th>
        <th>결제금액</th>
      </tr>
      </thead>
      <tbody>
      <tr class="cursor-pointer hover:bg-gray-100 border-b border-b-gray-200">
        <td class="py-3">2023.01.01</td>
        <td>월정액권</td>
        <td>11,000 원</td>
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

  <!-- Modal -->
  <div id="modalBg" class="model fixed w-full h-full z-10 bg-black opacity-50 top-0 left-0 hidden"></div>
  <!--  정지 Modal  -->
  <div id="stopModal" class="model fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl px-6 py-4 w-[300px] hidden">
    <p class="text-center font-bold text-xl mb-5">회원정지</p>
    <label class="block mb-3 text-lg">
      <input type="radio" name="stop" class="mr-2" />
      회원 정지 사유 1
    </label>
    <label class="block mb-3 text-lg">
      <input type="radio" name="stop" class="mr-2" />
      회원 정지 사유 2
    </label>
    <label class="block mb-3 text-lg">
      <input type="radio" name="stop" class="mr-2" />
      회원 정지 사유 3
    </label>
    <div class="flex gap-4 m-auto justify-center mt-8">
      <span class="px-3 py-2 bg-blue-500 text-white rounded-xl w-1/3 text-center cursor-pointer" @click="this.modalClose(1)">취소</span>
      <span class="px-3 py-2 bg-blue-500 text-white rounded-xl w-1/3 text-center cursor-pointer">확인</span>
    </div>
  </div>
  <!--  탈퇴 Modal  -->
  <div id="quitModal" class="model fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white rounded-2xl px-6 py-4 w-[300px] hidden">
    <p class="text-center font-bold text-xl mb-5">회원 탈퇴</p>
    <p class="text-red-700 text-center font-bold text-lg">정말 회원을 탈퇴 시키겠습니까?</p>
    <div class="flex gap-4 m-auto justify-center mt-8">
      <span class="px-3 py-2 bg-blue-500 text-white rounded-xl w-1/3 text-center cursor-pointer" @click="this.modalClose(2)">취소</span>
      <span class="px-3 py-2 bg-blue-500 text-white rounded-xl w-1/3 text-center cursor-pointer">확인</span>
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
    modalOpen(type){
      document.getElementById('modalBg').classList.remove('hidden');
      switch (type){
        case 1:
          document.getElementById('stopModal').classList.remove('hidden');
          break;
        case 2:
          document.getElementById('quitModal').classList.remove('hidden');
          break;
      }
    },
    modalClose(type){
      document.getElementById('modalBg').classList.add('hidden');
      switch (type){
        case 1:
          document.getElementById('stopModal').classList.add('hidden');
          break;
        case 2:
          document.getElementById('quitModal').classList.add('hidden');
          break;
      }
    }
  },
  created() {
    this.$parent.$parent.$refs.nav.activeBtn('member');
  }
};
</script>
