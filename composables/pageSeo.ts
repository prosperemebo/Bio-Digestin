import type { PageData } from '~/types';

export const usePageSeo = (pageData: PageData | null) => {
  const i18n = useI18n();

  if (!pageData?.bio_digestin_hero_section) return;

  const {
    headline,
    subheadline,
    desktop_background_image: image,
  } = pageData.bio_digestin_hero_section;

  const title = headline || 'BioDigestin';

  const description =
    subheadline ||
    (i18n.locale.value === 'de'
      ? 'Unterstützen Sie Ihre Verdauung und Gesundheit auf natürliche Weise mit BioDigestin™'
      : 'Support your digestion and health naturally with BioDigestin™');

  const keywords =
    i18n.locale.value === 'de'
      ? 'Verdauung, Darmgesundheit, Enzyme, BioDigestin, Immunsystem'
      : 'digestive health, gut health, enzymes, BioDigestin, immune support';

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      ...(image ? [{ property: 'og:image', content: image }] : []),
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  });
};
