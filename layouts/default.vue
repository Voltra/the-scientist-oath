<template>
  <div class="max-w-[1280px] mx-auto px-4" itemscope itemtype="https://schema.org/WebPage">
    <header class="dont-print relative flex justify-between items-center my-4 w-full h-16">
      <strong>
        <NuxtLink itemprop="relatedLink significantLink" to="/">
          <Logo
            class="h-16"
            height="80"
            width="80"
          />
        </NuxtLink>
      </strong>

      <nav class="nav">
        <NuxtLink class="ml-5 hover:underline" itemprop="relatedLink significantLink" to="/scientists">
          Scientists
        </NuxtLink>
        <NuxtLink class="ml-5 hover:underline" itemprop="relatedLink significantLink" to="/credits">
          Credits
        </NuxtLink>
        <NuxtLink class="ml-5 hover:underline" itemprop="relatedLink significantLink" to="/why">
          Why
        </NuxtLink>
      </nav>
    </header>

    <main class="mb-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Logo from "~/components/Logo.vue";
</script>
