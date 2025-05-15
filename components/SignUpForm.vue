<template>
  <section class="center-content py-9 xl:py-20">
    <form class="py-6">
      <div class="mb-6">
        <h2 class="text-4xl font-display font-bold uppercase text-title mb-4">
          {{ heading }}
        </h2>
        <div v-html="description"></div>
      </div>

      <div class="form-fieldset">
        <input
          type="text"
          name="firstName"
          :placeholder="firstNameLabel + '*'"
          class="form-input"
          required
        />
        <input
          type="text"
          name="lastName"
          :placeholder="lastNameLabel + '*'"
          class="form-input"
          required
        />
      </div>

      <div class="form-fieldset">
        <input
          type="tel"
          name="phoneNumber"
          :placeholder="phoneNumberLabel"
          class="form-input"
        />
        <input
          type="email"
          name="email"
          :placeholder="emailLabel + '*'"
          class="form-input"
          required
        />
      </div>

      <div class="form-fieldset">
        <input
          type="text"
          name="street"
          :placeholder="streetLabel + '*'"
          class="form-input"
          required
        />
        <input
          type="text"
          name="street2"
          :placeholder="street2Label"
          class="form-input"
        />
        <input
          type="text"
          name="state"
          :placeholder="cityLabel + '*'"
          class="form-input"
          required
        />
        <input
          type="text"
          name="postalCode"
          :placeholder="postcodeLabel + '*'"
          class="form-input"
          required
        />

        <input
          type="checkbox"
          id="promotion"
          name="iHavePromotion"
          class="form-checkbox"
          required
        />
        <label for="promotion">
          <span class="italic font-semibold">{{
            promotionalCheckboxLabel
          }}</span>
        </label>
      </div>

      <div class="form-fieldset">
        <input
          type="checkbox"
          id="newsletter"
          name="iWantNewsletter"
          class="form-checkbox"
        />
        <label for="newsletter">
          <span>{{ newsletterCheckboxLabel }}</span>
        </label>

        <input
          type="checkbox"
          id="subscription"
          name="iWantSubscription"
          class="form-checkbox"
        />
        <label for="subscription">
          <span>{{ subscriptionCheckboxLabel }}</span>
        </label>

        <input
          type="checkbox"
          id="terms"
          name="iAcceptTerms"
          class="form-checkbox"
          required
        />
        <label for="terms">
          <span>{{ termsCheckboxLabel }}</span>
        </label>
      </div>

      <div class="form-fieldset">
        <button type="submit" class="primary-btn w-full">
          {{ submitButtonText }}
        </button>
      </div>

      <div
        v-html="disclaimerText"
        class="text-sm text-accent-blue/60 my-2"
      ></div>

      <a
        :href="withdrawalButtonLink"
        class="text-center text-body-dark block underline"
        >{{ withdrawalButtonText }}</a
      >
    </form>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  heading: string;
  cityLabel: string;
  description: string;
  emailLabel: string;
  streetLabel: string;
  street2Label: string;
  postcodeLabel: string;
  disclaimerText: string;
  lastNameLabel: string;
  firstNameLabel: string;
  phoneNumberLabel: string;
  submitButtonText: string;
  termsCheckboxLabel: string;
  withdrawalButtonLink: string;
  withdrawalButtonText: string;
  newsletterCheckboxLabel: string;
  promotionalCheckboxLabel: string;
  subscriptionCheckboxLabel: string;
}>();
</script>
