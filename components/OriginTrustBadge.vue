<template>
  <section class="center-content py-9">
    <div class="flex flex-col-reverse items-stretch md:grid md:grid-cols-6 md:items-start xl:px-7">
      <div
        class="origin-trust-badge rounded-[2rem] text-white p-6 flex flex-col gap-4 md:col-span-4 md:relative md:z-20"
      >
        <h2 class="w-2/3 font-display font-bold text-2xl uppercase">
          {{ heading }}
        </h2>
        <div v-html="bodyText"></div>
        <figure class="flex items-center justify-end">
          <figcaption
            class="font-display uppercase text-base text-white mr-2 font-semibold"
          >
            By
          </figcaption>
          <NuxtImg
            :src="baseImageUrl + signatureImage"
            class="h-11 w-48 object-contain object-right"
            height="345"
            width="105"
            :placeholder="[38, 12]"
            preload
          />
        </figure>
      </div>
      <figure class="-mb-12 relative z-10 md:col-span-2 md:mb-0 md:-ml-12">
        <NuxtImg
          :src="baseImageUrl + flagImage"
          class="w-11/12 object-contain object-left-top md:object-center md:w-[calc(100% + 3rem)]"
          height="345"
          width="105"
          :placeholder="[38, 12]"
          preload
        />
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  heading: string;
  bodyText: string;
  flagImage: string;
  signatureImage: string;
}>();

const config = useRuntimeConfig();
const baseImageUrl = config.public.IMAGE_BASE_URL;
</script>

<style scoped>
.origin-trust-badge {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(137deg, #2b2d6e 45%, #e4203e 100%);
}
</style>