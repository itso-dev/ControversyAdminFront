<template>
  <div class="px-8 py-8 ">
    <p class="text-2xl font-bold mb-5">배너 관리</p>
    <table class="w-full border-collapse border border-slate-400">
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">노출 순서</td>
        <td class="w-5/6 px-5 py-3">
          <select>
            <option value="1">1</option>
            <option value="2">3</option>
            <option value="2">3</option>
          </select>
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">배너 명</td>
        <td class="w-1/3 px-5 py-3">
          <input type="text" placeholder="배너 명을 입력하세요"
          class="border-none outline-none w-full">
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">URL</td>
        <td class="w-1/3 px-5 py-3">
          <input type="text" placeholder="배너에 삽입 할 URL을 입력하세요"
                 class="border-none outline-none w-full">
        </td>
      </tr>
      <tr class="border-b border-slate-400">
        <td class="w-1/6 px-5 py-3 bg-fuchsia-100">이미지 등록</td>
        <td class="w-1/3 px-5 py-3">
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input type="file" class="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "/>
          </label>
        </td>
      </tr>
    </table>

    <span class="mt-20 block mx-auto w-1/6 text-center bg-blue-700 rounded-2xl text-white py-3">완료</span>
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
    this.$parent.$parent.$refs.nav.activeBtn('banner');
  }
};
</script>
