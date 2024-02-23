<template>
  <div class="credits linkList">
    <Intro
      v-once
      title="Credits"
      sub-title="Credit where credit is due"
    />

    <div v-for="item in items" :key="item.for" class="_item">
      <a class="hover:underline" :href="item.url" tabindex="0" target="_blank">{{ item.for }}</a>
      by {{ item.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/types";
import type { Attributions } from "~/types/attributions";

export interface QueryData extends ParsedContent {
		attributions: Attributions[];
	}

useHead({
	title: "Credits"
});

const { data } = useAsyncData("credits", () => queryContent<QueryData>("/attributions").findOne());

const items = computed(() => data.value?.attributions);
</script>
