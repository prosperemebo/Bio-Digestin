<template>
  <Header
    :ingredients="data?.header_section.ingredients"
    :startNow="data?.header_section.start_now"
    :testimonials="data?.header_section.testimonials"
    :headline="data?.bio_digestin_hero_section.headline"
    :subheadline="data?.bio_digestin_hero_section.subheadline"
    :mobileImage="data?.bio_digestin_hero_section.mobile_background_image"
    :desktopImage="data?.bio_digestin_hero_section.desktop_background_image"
    :buttonText="data?.bio_digestin_hero_section.button_text"
    :buttonLink="data?.bio_digestin_hero_section.button_link"
    :logo="data?.header_section.header_product_logo"
  />
  <main class="bg-accent">

  </main>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { ApiResponse } from "@/types";

const i18n = useI18n();
const config = useRuntimeConfig();

const apiUrl = computed(() => {
  return i18n.locale.value === "de"
    ? config.public.API_URL_DE
    : config.public.API_URL;
});

const { data, pending, error } = await useAsyncData(
  `page_data_${i18n.locale.value}`,
  () => $fetch<ApiResponse>(apiUrl.value as string),
  { transform: (response: ApiResponse) => response["data"] }
);
</script>
