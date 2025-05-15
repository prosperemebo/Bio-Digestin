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
    <WhyChooseProduct
      :headline="data?.why_choose_product_section.headline"
      :subheadline="data?.why_choose_product_section.subheadline"
      :whyChooseProduct="data?.why_choose_product_section.why_choose_product"
    />
  </main>
  <SignUpForm
    :heading="data?.signup_form_section.heading"
    :cityLabel="data?.signup_form_section.city_label"
    :emailLabel="data?.signup_form_section.email_label"
    :description="data?.signup_form_section.description"
    :streetLabel="data?.signup_form_section.street_label"
    :street2Label="data?.signup_form_section.street2_label"
    :postcodeLabel="data?.signup_form_section.postcode_label"
    :lastNameLabel="data?.signup_form_section.last_name_label"
    :disclaimerText="data?.signup_form_section.disclaimer_text"
    :firstNameLabel="data?.signup_form_section.first_name_label"
    :phoneNumberLabel="data?.signup_form_section.phone_number_label"
    :submitButtonText="data?.signup_form_section.submit_button_text"
    :termsCheckboxLabel="data?.signup_form_section.terms_checkbox_label"
    :withdrawalButtonText="data?.signup_form_section.withdrawal_button_text"
    :withdrawalButtonLink="data?.signup_form_section.withdrawal_button_link"
    :newsletterCheckboxLabel="data?.signup_form_section.newsletter_checkbox_label"
    :promotionalCheckboxLabel="data?.signup_form_section.promotional_checkbox_label"
    :subscriptionCheckboxLabel="data?.signup_form_section.subscription_checkbox_label"
  />
  <Footer
    :inquiresHeading="data?.footer_section.first_heading"
    :contactHeading="data?.footer_section.second_heading"
    :termsOfUse="data?.footer_section.terms_of_service"
    :privacyPolicy="data?.footer_section.privacy_policy"
    :imprint="data?.footer_section.imprint"
  />
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
