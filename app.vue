<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import "@/assets/css/main.scss";

useSeoMeta({
	ogImage: "/og.jpg"
});
</script>
