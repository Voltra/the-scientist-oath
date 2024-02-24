<template>
  <section>
    <ul class="list-none">
      <li v-for="item in items" :id="item.slug" :key="item.slug" class="mb-8 last:mb-0">
        <OathItem :item="item" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/types";
import type { OathItem } from "~/types/oath";

export interface OathItemsData extends ParsedContent {
		oathItems: OathItem[];
	}

const { data } = await useAsyncData("oathItems", () => queryContent<OathItemsData>("/oath-items").findOne());

const items = computed(() => data.value?.oathItems);
</script>
