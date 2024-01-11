<script setup>
const route = ref(useRoute());
const data = ref(null);
const word = ref(null);

async function fetchData() {
  data.value = await useFetch(
    `/api/dictionary/${
      route.value.query.search ? route.value.query.search : ""
    }`
  );
  word.value = data.value?.data?.word || null;
}

fetchData();

watch(() => route.value.query.search, fetchData);
</script>
<template>
  <div class="w-[90vw] mx-auto md:max-w-[732px] py-8 lg:max-w-[1000px]">
    <Word v-if="word" :word="word" />
    <div v-if="!word">
      <h1 class="text-3xl font-bold text-center">No results found</h1>
      <p class="text-center mt-4">Try searching for another word or phrase.</p>
    </div>
  </div>
</template>
