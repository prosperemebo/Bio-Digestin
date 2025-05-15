<template>
  <section class="pt-24 3xl:pt-44 pb-9 center-content relative">
    <div class="mb-9 lg:text-right lg:max-w-[40rem] lg:ml-auto">
      <h2
        class="text-xl mb-2 font-bold uppercase text-title font-display lg:text-5xl"
      >
        {{ headline }}
      </h2>
      <div v-html="subHeadline" class="italic font-semibold text-title"></div>
    </div>
    <div class="lg:grid lg:grid-cols-5 lg:items-center lg:gap-6">
      <ul class="m-9 col-span-3 lg:flex lg:gap-6">
        <li
          v-for="(symptomRiskFactor, index) in symptomsRiskFactors"
          :key="index"
          class="flex items-center gap-2 mb-6 w-2/3 lg:w-full lg:text-center lg:flex-1 lg:flex-col"
          :class="index % 2 !== 0 ? 'ml-auto' : ''"
        >
          <NuxtImg
            :src="baseImageUrl + symptomRiskFactor.image"
            :alt="symptomRiskFactor.name"
            class="w-9 h-9 object-contain lg:w-14 lg:h-14 lg:mb-4"
          />
          <p>{{ symptomRiskFactor.name }}</p>
        </li>
      </ul>
      <div v-html="description" class="col-span-2 lg:text-right"></div>
    </div>

    <!-- Backdrop -->
    <div
      class="absolute top-0 -right-1/2 lg:-right-1/4 pointer-events-none w-full h-full opacity-30"
    >
      <NuxtImg
        src="/images/section-backdrop.png"
        alt="Backdrop"
        class="h-full w-full object-contain object-right-top"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SymptomRiskFactor } from "@/types";

const config = useRuntimeConfig();
const baseImageUrl = config.public.IMAGE_BASE_URL;

defineProps<{
  headline: string;
  subHeadline: string;
  description: string;
  symptomsRiskFactors: SymptomRiskFactor[];
}>();
</script>