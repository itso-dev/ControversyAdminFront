<template>
  <div class="flex min-w-[1300px] min-h-screen">
    <Nav ref="nav"/>
    <div class="w-4/5">
      <Top />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Top from "@/components/Top.vue";

export default {
  components: {
    Nav,
    Top,
  },
  setup() {
    return {};
  },
};
</script>
