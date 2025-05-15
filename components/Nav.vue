<template>
  <nav
    class="pt-9 center-content flex items-center justify-between"
  >
    <figure>
      <NuxtImg
        src="/logos/logo.png"
        alt="Bio Digestin"
        class="w-28 h-8 object-contain object-left"
        height="105"
        width="345"
      />
    </figure>
    <ul class="items-center gap-6 hidden md:flex">
      <li>
        <NuxtLink
          :to="ingredients.link"
          class="text-primary font-bold text-sm lg:text-base uppercase py-1 px-2 border-b-2 border-primary hover:bg-primary hover:text-light transition duration-300 ease-in-out"
        >
          {{ ingredients.link_text }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="testimonials.link"
          class="text-primary font-bold text-sm lg:text-base uppercase py-1 px-2 border-b-2 border-primary hover:bg-primary hover:text-light transition duration-300 ease-in-out"
        >
          {{ testimonials.link_text }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="startNow.link"
          class="text-primary font-bold text-sm lg:text-base uppercase py-1 px-2 border-2 border-primary rounded-full bg-secondary bg-opacity-30 hover:bg-primary hover:text-light transition duration-300 ease-in-out"
        >
          {{ startNow.link_text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { LinkText } from "~/types";

const config = useRuntimeConfig();
const baseImageUrl = config.public.IMAGE_BASE_URL;

defineProps<{
  startNow: LinkText;
  ingredients: LinkText;
  testimonials: LinkText;
  logo: string;
}>();
</script>