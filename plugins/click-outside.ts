import type { ComponentCustomProperties } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    mounted(el: HTMLElement, binding: any) {
      const clickOutsideEvent = (event: MouseEvent) => {
        const targetNode = event.target as Node;
        if (!el.contains(targetNode)) {
          binding.value(); // toggles the outside function
          document.body.removeEventListener("mousedown", clickOutsideEvent); // removes the event listener
        }
      };
      document.body.addEventListener("mousedown", clickOutsideEvent);
    },
  });
});
