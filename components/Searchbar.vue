<script setup>
const search = ref("");
const searchFnc = () => {
  console.log(search.value);
  navigateTo({
    path: "/",
    query: { search: search.value },
  });
};
</script>
<template>
  <form
    class="w-[90vw] mx-auto md:max-w-[732px] py-8 lg:max-w-[1000px]"
    @submit.prevent="searchFnc"
  >
    <div
      class="rounded w-full px-4 py-2 flex items-center justify-between bg-gray-100 dark:bg-slate-600"
    >
      <input
        type="text"
        v-model="search"
        placeholder="Dictionary"
        class="bg-inherit flex-grow rounded"
      />
      <button type="submit">
        <LucideSearch />
      </button>
    </div>
  </form>
</template>
