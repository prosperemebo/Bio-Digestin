<template>
  <section class="center-content py-9 relative">
    <div class="mb-4 md:grid md:grid-cols-3 md:gap-4 relative z-10">
      <h2
        class="text-4xl font-display font-bold uppercase text-title mb-4 md:col-span-2 md:mr-9"
      >
        {{ heading }}
      </h2>
      <div v-html="subheadline" class="md:text-right"></div>
    </div>

    <ul class="flex flex-col gap-4 md:flex-row relative z-10">
      <li
        v-for="(item, index) in howItWorks"
        :key="index"
        class="bg-light flex items-center gap-2 rounded-lg p-2 md:flex-1 md:flex-col md:items-stretch md:p-4 md:gap-4"
        :class="index % 2 !== 0 ? 'flex-row-reverse' : ''"
      >
        <NuxtImg
          :src="baseImageUrl + item.image"
          :alt="item.name"
          class="h-40 w-1/3 object-cover md:w-full"
        />
        <div class="ml-2 md:ml-0">
          <h3
            class="text-stroke-hover font-display text-2xl font-bold uppercase mb-2 md:text-5xl"
          >
            {{ item.name }}
          </h3>
          <p>{{ item.description }}</p>
        </div>
      </li>
    </ul>

    <!-- Backdrop -->
    <div
      class="absolute top-0 -right-1/4 pointer-events-none w-full h-full opacity-30 hidden lg:block"
    >
      <NuxtImg
        src="/images/section-backdrop.png"
        class="h-full w-full object-contain object-right-top"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HowItWorksStep } from "~/types";

defineProps<{
  heading: string;
  subheadline: string;
  description: string;
  howItWorks: HowItWorksStep[];
}>();

const config = useRuntimeConfig();
const baseImageUrl = config.public.IMAGE_BASE_URL;
</script>