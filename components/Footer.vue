<template>
  <footer class="border-t-8 border-accent p-6 bg-primary">
    <ul class="flex flex-col items-center justify-center gap-6 mb-6 md:flex-row">
      <li class="max-w-[20rem] flex items-center gap-2">
        <Icon name="hugeicons:mail-02" class="text-secondary text-4xl" />
        <span v-html="inquiresHeading" class="text-white"></span>
      </li>
      <li class="max-w-[20rem] flex items-center gap-2">
        <Icon name="solar:phone-linear" class="text-secondary text-4xl" />
        <span v-html="contactHeading" class="text-white"></span>
      </li>
    </ul>
    <ul class="flex flex-col justify-center items-center gap-4 md:flex-row">
      <li
        v-for="(link, index) in links"
        :key="index""
      >
        <a :href="link.href" target="_blank" class="text-white text-opacity-60 underline">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import type { FooterLink } from "@/types";

const props = defineProps<{
  inquiresHeading: string;
  contactHeading: string;
  termsOfUse: FooterLink;
  privacyPolicy: FooterLink;
  imprint: FooterLink;
}>();

const links = computed(() => [
  {
    label: props.termsOfUse.terms_button_text,
    href: props.termsOfUse.terms_link,
  },
  {
    label: props.privacyPolicy.privacy_button_text,
    href: props.privacyPolicy.privacy_link,
  },
  {
    label: props.imprint.imprint_button_text,
    href: props.imprint.imprint_link,
  },
]);
</script>