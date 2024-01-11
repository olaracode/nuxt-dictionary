<template>
  <button
    @click="toggle"
    class="flex items-center justify-center gap-1 w-[100px] capitalize"
  >
    Tipografia
  </button>
  <div
    v-if="isOpen"
    class="absolute z-10 w-[150px] top-16 p-4 bg-white rounded-md shadow-md dark:bg-slate-600"
  >
    <TypographyToggler :close="close" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>
