<template>
  <article :class="classes" class="mx-auto block w-[95%] max-w-[45ch] lg:max-w-[75ch]">
    <div class="_wrapper text-text bg-primary rounded-2xl">
      <h3 class="rounded-[inherit]">
        <button
          :id="btnId"
          class="_header w-full flex justify-between items-center rounded-t-[inherit] rounded-b-none bg-secondary p-4 text-[1.2rem] cursor-pointer transition-all duration-250 selection:text-primary selection:bg-text"
          :aria-controls="contentId"
          type="button"
          :aria-expanded="expanded"
          @click="toggle()"
        >
          <span class="_title">
            {{ item.title }}
          </span>

          <svg
            class="_toggleIcon flex-grow-0 flex-shrink-0 basis-[1em] rotate-180 transition-transform duration-500"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{{ svgAlt }}</title>
            <path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z" />
          </svg>
        </button>
      </h3>

      <div :id="contentId" class="_content block rounded-[inherit] rounded-t-none h-auto max-h-[100vh] p-6 leading-[1.3] bg-primary opacity-100 cursor-default border-t border-t-primary transition-all duration-500 selection:text-primary selection:bg-text" role="region" :aria-labelledby="btnId">
        {{ item.description }}
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useToggle } from "@vueuse/shared";
import type { OathItem } from "~/types/oath";

export interface OathItemProps {
		item: OathItem;
	}

defineProps<OathItemProps>();

const btnId = useId();
const contentId = useId();

const [collapsed, toggle] = useToggle(true);

const expanded = computed(() => collapsed ? "false" : "true");

const classes = computed(() => ["oathItem", {
	"-collapsed": collapsed.value
}]);

const svgAlt = computed(() => collapsed.value ? "Show details" : "Hide details");
</script>

<style lang="scss">
	@import "@/assets/css/variables";
	@import "@/assets/css/mixins";

	.oathItem.-collapsed {
		._header {
			border-radius: inherit;
			background-color: $primary;
		}

		._content {
			@include verticalPadding(0);

			margin-block: 0;
			max-height: 0;
			opacity: 0;
			pointer-events: none;
		}

		._toggleIcon {
			transform: none;
		}
	}
</style>
