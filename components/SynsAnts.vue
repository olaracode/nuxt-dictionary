<script setup>
const { title, list } = defineProps({
  title: {
    type: String,
    required: true,
  },
  list: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="mt-4">
    <h4 class="mb-1 text-gray-500 dark:text-white">{{ title }}:</h4>
    <ul class="flex flex-wrap gap-4 text-gray-700 dark:text-white">
      <li v-for="word in list" :key="{ word }">
        <NuxtLink
          to="/?search={{ word }}"
          class="text-sm capitalize text-purple-700 dark:text-purple-300 hover:underline"
        >
          {{ word }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
