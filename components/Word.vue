<script setup>
const { word } = defineProps({
  word: {
    type: Array,
    required: true,
  },
});
function findMatch(objects, key) {
  const foundObject = objects.find(
    (obj) => obj.hasOwnProperty(key) && obj[key] !== ""
  );

  if (foundObject) {
    return foundObject[key];
  }
  return null;
}
</script>

<template>
  <div class="w-full">
    <div class="w-full mb-20" v-for="w in word">
      <div class="flex justify-between items-center w-full">
        <div>
          <h2 class="font-bold text-3xl capitalize">{{ w.word }}</h2>

          <p class="text-purple-700 dark:text-purple-300 text-lg">
            {{ w.phonetic }}
          </p>
        </div>
        <Phonetics
          v-if="findMatch(w.phonetics, 'audio')"
          :audio="findMatch(w.phonetics, 'audio')"
        />
        <button
          v-else
          class="p-5 text-purple-700 bg-purple-300 rounded-full disabled:cursor-not-allowed disabled:opacity-50"
          disabled
        >
          <LucidePlay />
        </button>
      </div>
      <Meanings
        v-for="meaning in w.meanings"
        :key="meaning.partOfSpeech"
        :meaning="meaning"
      />
    </div>
  </div>
</template>
