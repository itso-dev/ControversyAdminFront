<template>
  <div class="w-1/5 shadow-lg min-h-full">
    <div class=" pt-10 pb-5 px-7 text-3xl text-white bg-gray-400">
      <span class="text-amber-800 font-bold">기업명</span> 관리자 센터
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'Index', query: {} }" :class="this.active === 'home' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">홈</router-link>
    </div>
    <div class="border-b-gray-200 border-b">
      <router-link :to="{ name: 'ContentsList', query: {} }" :class="this.active === 'contents' ? 'bg-blue-200 font-bold':''" class="w-full px-7 py-3 text-lg cursor-pointer inline-block">콘텐츠 관리</router-link>
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
