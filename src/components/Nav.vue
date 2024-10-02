<template>
  <div class="w-1/5 shadow-lg min-h-full">
    <div class="flex flex-col pt-10 pb-5 px-7 text-3xl text-black bg-gray-100">
      <span class="text-primary font-bold">오늘의 논란종결</span> 관리자 센터
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'Index', query: {} }" :class="this.active === 'home' ? 'bg-[#FFDBC1] font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">홈</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'ContentsList', query: {} }" :class="this.active === 'contents' ? 'bg-[#FFDBC1] font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">콘텐츠 관리</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'RequestList', query: {} }" :class="this.active === 'request' ? 'bg-[#FFDBC1] font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">신청 콘텐츠 관리</router-link>
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
