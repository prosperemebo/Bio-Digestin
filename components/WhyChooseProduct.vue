<template>
  <section class="center-content py-9">
    <div class="mb-4 text-center">
      <h2 class="text-4xl mb-2 font-bold uppercase text-title font-display">
        {{ headline }}
      </h2>
      <div v-html="subheadline"></div>
    </div>

    <ul class="flex flex-col gap-4 lg:flex-row lg:my-9">
      <li
        v-for="(reason, index) in whyChooseProduct"
        :key="index"
        class="px-4 py-5 flex-1 flex items-center gap-4 rounded-lg shadow-lg shadow-primary/20 lg:flex-col lg:justify-center lg:text-center border-2"
        :style="{
          backgroundColor: reason.card_background_color,
          borderColor: reason.card_border_color,
        }"
      >
        <NuxtImg
          :src="baseImageUrl + reason.image"
          :alt="reason.description"
          class="w-14 h-14 object-contain"
        />
        <div>
          <p
            class="text-light"
            :class="{
                'font-display font-semibold uppercase !text-body':
                index === whyChooseProduct.length - 1,
            }"
          >
            {{ reason.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { WhyChooseProduct } from "~/types";

defineProps<{
  headline: string;
  subheadline: string;
  whyChooseProduct: WhyChooseProduct[];
}>();

const config = useRuntimeConfig();
const baseImageUrl = config.public.IMAGE_BASE_URL;
</script>