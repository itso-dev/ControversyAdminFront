<template>
  <div class="mt-32">
    <p class="text-center text-2xl font-bold mb-5">Staff Only</p>
    <div class="px-4 py-5 shadow-lg rounded-lg w-1/3 m-auto border-gray-200 border">
      <p class="text-lg font-bold mb-3">아이디</p>
      <input
          class="w-full border outline-none rounded border-gray-300 mb-8"
          type="text" v-model="this.id">
      <p class="text-lg font-bold mb-3">비밀번호</p>
      <input
          class="w-full border outline-none rounded border-gray-300 mb-12"
          type="password" v-model="this.password" @keypress.enter="onSubmit">
      <input
          class="w-1/3 py-2 px-7 bg-gray-300 m-auto block font-bold rounded"
          value="로그인" type="submit" @click="onSubmit"/>
    </div>
  </div>
</template>

<script>
import { useCommonStore } from '@/_stores';

export default {
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
      auto_login: true,
      id: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      if (this.id === '') {
        alert('아이디를 입력해 주세요.');
        return;
      }
      if (this.password === '') {
        alert('비밀번호를 입력해 주세요.');
        return;
      }
      this.commonStore.login(this.id, this.password, this.auto_login);
    },
  },
  mounted() {
  }
};
</script>
