<template>
    <div class="px-8 py-8 ">
      <p class="text-2xl font-bold">홈</p>
    </div>
    <div>

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
