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
  <main class="bg-accent -mt-28 3xl:mt-32">
    <ProblemStatement
      :headline="data?.problem_statement_section.headline"
      :subHeadline="data?.problem_statement_section.subheadline"
      :description="data?.problem_statement_section.description"
      :symptomsRiskFactors="
        data?.problem_statement_section.symptoms_risk_factors
      "
    />
    <OriginTrustBadge
      :heading="data?.origin_trust_badge_section.heading"
      :bodyText="data?.origin_trust_badge_section.body_text"
      :flagImage="data?.origin_trust_badge_section.flag_image"
      :signatureImage="data?.origin_trust_badge_section.signature_image"
    />
    <DailySupportBenefit
      :headline="data?.daily_support_benefit_section.headline"
      :subheadline="data?.daily_support_benefit_section.subheadline"
      :description="data?.daily_support_benefit_section.description"
      :dailyBenefits="data?.daily_support_benefit_section.daily_benefits"
    />
    <HowItWorks
      :heading="data?.how_bio_digestin_works_section.headline"
      :subheadline="data?.how_bio_digestin_works_section.subheadline"
      :howItWorks="data?.how_bio_digestin_works_section.how_it_works"
    />
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
