<template>
  <div>
    <Intro
      v-once
      :title="title"
      :sub-title="description"
    />

    <OathItems />
  </div>
</template>

<script setup lang="ts">
import { usePageHead } from "~/composables/usePageHead";

const title = "The Scientist's Oath";
const description = "The Oath to live by for Scientists all around the globe";

usePageHead({ title, description });
</script>
