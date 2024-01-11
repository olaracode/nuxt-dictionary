<template>
  <div class="dark:bg-slate-900 dark:text-white min-h-screen">
    <Navbar />
    <Searchbar />
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    const currentFont = localStorage.getItem("fontType");
    if (currentFont) {
      document.body.classList.add(currentFont);
    }
  },
};
</script>
