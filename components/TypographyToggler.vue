<template>
  <div v-click-outside="close" class="flex flex-col gap-3">
    <button
      v-for="item in items"
      :key="item.value"
      @click="changeTypography(item)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      items: [
        {
          name: "Sans Serif",
          value: "font-sans",
        },
        {
          name: "Serif",
          value: "font-serif",
        },
        {
          name: "Mono",
          value: "font-mono",
        },
      ],
    };
  },
  methods: {
    changeTypography(item) {
      document.body.classList.remove("font-sans", "font-serif", "font-mono");
      document.body.classList.add(item.value);
      localStorage.setItem("fontType", item.value);
    },
  },
};
</script>
