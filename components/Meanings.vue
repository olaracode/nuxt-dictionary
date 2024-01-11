<script setup>
const { meaning } = defineProps({
  meaning: {
    type: Object,
    required: true,
  },
});
const antonyms = computed(() => {
  return meaning.definitions.map((d) => d.antonyms).flat();
});
const synonyms = computed(() => {
  return meaning.definitions.map((d) => d.synonyms).flat();
});
</script>
<template>
  <div class="my-5">
    <div class="flex items-center gap-6 mb-2">
      <h3 class="font-bold text-lg capitalize">{{ meaning.partOfSpeech }}</h3>
      <hr class="flex-grow" />
    </div>
    <h4 class="mb-1 text-gray-500 dark:text-white">Meanings:</h4>
    <ul>
      <Definitions
        v-for="definition in meaning.definitions"
        :key="definition.definition"
        :definition="definition"
      />
    </ul>
    <div v-if="antonyms.length > 0">
      <SynsAnts title="Antonyms" :list="antonyms" />
    </div>
    <div v-if="synonyms.length > 0">
      <SynsAnts title="Synonyms" :list="synonyms" />
    </div>
  </div>
</template>
