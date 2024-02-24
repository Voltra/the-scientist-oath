<template>
  <div class="scientists linkList">
    <Intro
      v-once
      :title="title"
      :sub-title="description"
    />

    <div v-for="scientist in scientists" :key="scientist.id" itemscope itemtype="https://schema.org/Person">
      <span class="dont-print">
        {{ scientist.flag }}
      </span>
      <a :href="scientist.website" itemprop="name url sameAs" tabindex="0" target="_blank">
        {{ scientist.displayName }}
      </a>
      ({{ scientist.timeFrame }}) | {{ scientist.title }}
      <span class="print-only">
        | {{ scientist.website }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/types";
import { usePageHead } from "~/composables/usePageHead";
import type { CountryFlag, Scientist } from "~/types/scientists";

export interface ScientistsData extends ParsedContent {
	flags: CountryFlag[];
	scientists: Scientist[];
}

const title = "Scientists";
const description = "A list of scientists who took the oath and decided to show it here";

usePageHead({ title, description });

const { data } = useAsyncData("scientists", () => queryContent<ScientistsData>("/scientists").findOne());

const scientists = computed(() => data.value?.scientists);
</script>
