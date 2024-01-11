<script setup>
const { definition } = defineProps({
  definition: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li class="li-disc">
    <p class="text-sm">{{ definition.definition }}</p>
    <p
      class="text-gray-500 dark:text-white text-sm italic ml-2"
      v-if="definition.example"
    >
      {{ definition.example }}
    </p>
  </li>
</template>
