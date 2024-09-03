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
