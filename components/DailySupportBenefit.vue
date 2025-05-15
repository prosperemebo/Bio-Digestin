<template>
  <section class="center-content py-9 xl:py-20">
    <div class="mb-4 lg:text-right lg:max-w-[40rem] lg:ml-auto">
      <h2
        class="text-xl mb-2 font-bold uppercase text-title font-display lg:text-5xl"
      >
        {{ headline }}
      </h2>
      <div v-html="subheadline" class="italic font-semibold text-title"></div>
    </div>
    <ul class="flex flex-col gap-4 md:flex-row">
      <li v-html="description" class="flex-1"></li>
      <li
        v-for="(dailyBenefit, index) in dailyBenefits"
        :key="index"
        class="px-4 py-5 flex-1 bg-light flex items-center gap-4 rounded-lg shadow-lg md:flex-col md:justify-center md:text-center"
      >
        <NuxtImg
          :src="baseImageUrl + dailyBenefit.image"
          :alt="dailyBenefit.name"
          class="w-14 h-14 object-contain"
        />
        <div>
          <h3
            class="font-display font-semibold uppercase mb-2"
          >
            {{ dailyBenefit.name }}
          </h3>
          <p>{{ dailyBenefit.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { DailyBenefit } from "@/types";

const config = useRuntimeConfig();
const baseImageUrl = config.public.IMAGE_BASE_URL;

defineProps<{
  headline: string;
  subheadline: string;
  description: string;
  dailyBenefits: DailyBenefit[];
}>();
</script>

box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.15);