<template>
  <div class="flex min-w-[1300px] min-h-screen">
    <Nav ref="nav" v-if="this.commonStore.member != null"/>
    <div :class="this.commonStore.member != null ?'w-4/5':'w-full'">
      <Top v-if="this.commonStore.member != null" />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Top from "@/components/Top.vue";
import { useCommonStore } from '@/_stores';

export default {
  props: [''],
  setup() {
    const commonStore = useCommonStore()
    return {
      commonStore,
    }
  },
  components: {
    Nav,
    Top,
  },
};
</script>
