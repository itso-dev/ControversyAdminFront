<template>
  <div class="border-b border-gray-300 text-right py-5 px-5" v-if="this.commonStore.member != null">
    <span class="border-r border-r-gray-300 pr-3 mr-3 text-sm">{{ this.commonStore.member.email }}</span>
    <span class="text-sm cursor-pointer" @click="logout">로그아웃</span>
  </div>
  <div class="border-b border-gray-300 text-right py-5 px-5" v-else>
    <span class="text-sm cursor-pointer" @click="this.goToPage('Login')">로그인</span>
  </div>
</template>

<script>
import { useCommonStore } from '@/_stores';

export default {
  props:[''],
  setup() {
    const commonStore = useCommonStore()
    return {
      commonStore,
    }
  },
  components: {
  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    logout() {
      this.commonStore.logout()
    }
  },
  mounted() {
  }
}
</script>
