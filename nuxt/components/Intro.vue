<template>
  <section>
    <h1 class="mx-auto block text-center mb-4">
      {{ title }}
    </h1>

    <p v-if="subTitle" class="mx-auto block text-center">
      {{ subTitle }}
    </p>

    <Logo
      class="mx-auto block text-center my-16 max-w-[95%] max-h-[230px] w-full"
      title="Logo"
    />
  </section>
</template>

<script setup lang="ts">
import Logo from "~/components/Logo.vue";

export interface IntroProps {
		title: string;
		subTitle?: string;
	}

withDefaults(defineProps<IntroProps>(), {
	subTitle: undefined
});
</script>
