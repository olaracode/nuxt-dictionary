<script setup>
const { audio } = defineProps({
  audio: String,
});
console.log(audio);
const isPlaying = ref(false);
const audioElement = ref(null);

function togglePlay() {
  if (isPlaying.value) {
    audioElement.value.pause();
  } else {
    audioElement.value.play();
  }
  isPlaying.value = !isPlaying.value;
}
</script>

<template>
  <button
    class="p-5 text-purple-700 bg-purple-300 rounded-full"
    @click="togglePlay"
  >
    <LucidePlay v-if="!isPlaying" />
    <LucidePause v-else />
  </button>
  <audio ref="audioElement" :src="audio"></audio>
</template>
