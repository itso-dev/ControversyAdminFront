<template>
  <div class="w-1/5 shadow-lg min-h-full">
    <div class=" pt-10 pb-5 px-7 text-3xl text-white bg-gray-400">
      <span class="text-amber-800 font-bold">기업명</span> 관리자 센터
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'Index', query: {} }" :class="this.active === 'home' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">홈</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'MemberList', query: {} }" :class="this.active === 'member' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">회원 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'BusinessMemberList', query: {} }" :class="this.active === 'business' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">기업회원 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'BannerList', query: {} }" :class="this.active === 'banner' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">배너 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'PopupList', query: {} }" :class="this.active === 'popup' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">팝업 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'PaymentList', query: {} }" :class="this.active === 'payment' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">결제 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'BlackList', query: {} }" :class="this.active === 'black' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">블랙리스트 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'BoardList', query: {} }" :class="this.active === 'board' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">게시판 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'ProjectList', query: {} }" :class="this.active === 'project' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">프로젝트 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'ContactList', query: {} }" :class="this.active === 'contact' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">문의 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'NoticeList', query: {} }" :class="this.active === 'notice' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">공지사항 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'FaqList', query: {} }" :class="this.active === 'faq' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">FAQ 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'AlertList', query: {} }" :class="this.active === 'alert' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">알림 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'ManagerList', query: {} }" :class="this.active === 'manager' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">담당자 관리</router-link>
    </div>
  </div>
</template>


<script>

export default {
  props: [''],
  data() {
    return {
      active:'home',
    }
  },
  watch: {

  },
  methods: {
    activeBtn(type){
      this.active = type;
    },
  },
  created() {
  }
}
</script>
