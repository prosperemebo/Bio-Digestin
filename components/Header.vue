<template>
  <header>
    <Nav
      :ingredients="ingredients"
      :startNow="startNow"
      :testimonials="testimonials"
      :logo="logo"
    />
    <div
      class="pt-12 px-5 xl:px-0 3xl:h-[45rem] flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center"
    >
      <div class="lg:w-1/2 textbox-margin flex flex-col justify-end">
        <h1
          class="text-2xl md:text-4xl lg:text-5xl lg:text-right font-bold uppercase mb-2 font-display text-primary"
        >
          {{ headline }}
        </h1>
        <div
          v-html="subheadline"
          class="text-right max-w-96 ml-auto mb-6"
        ></div>

        <NuxtLink
          :to="buttonLink"
          class="primary-btn self-end absolute top-[25rem] z-10 md:static"
        >
          {{ buttonText }}
        </NuxtLink>

        <!-- Backdrop -->
        <div
          class="absolute top-0 right-0 w-full h-[90dvh] -z-10 hidden lg:block"
        >
          <NuxtImg
            src="/images/hero-backdrop.png"
            class="h-full w-full object-contain object-right-top"
          />
        </div>
      </div>
      <NuxtImg
        :src="baseImageUrl + desktopImage"
        class="w-11/12 xl:max-h-dvh xl:min-h-[45rem] md:w-2/3 lg:w-1/2 object-contain object-left-top -translate-x-5 3xl:translate-y-36"
        height="345"
        width="105"
        :placeholder="[38, 12]"
        preload
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import type { LinkText } from '~/types';

const config = useRuntimeConfig();
const baseImageUrl = config.public.IMAGE_BASE_URL;

defineProps<{
  startNow: LinkText;
  ingredients: LinkText;
  testimonials: LinkText;
  headline: string;
  subheadline: string;
  mobileImage: string;
  desktopImage: string;
  buttonText: string;
  buttonLink: string;
  logo: string;
}>();
</script>

<style>
.textbox-margin {
  --pageMargin: calc(100vw - 78%);
  --sideMargin: calc(var(--pageMargin) / 2);
  @apply xl:mr-[var(--sideMargin)];
}
</style>