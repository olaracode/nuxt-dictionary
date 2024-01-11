<template>
  <nav class="w-[90vw] mx-auto md:max-w-[732px] py-8 lg:max-w-[1000px]">
    <div class="flex justify-between items-center">
      <NuxtLink to="/">
        <LucideBookMarked />
      </NuxtLink>
      <div class="flex gap-2">
        <Dropdown />
        <ThemeToggler />
      </div>
    </div>
  </nav>
</template>
