export const useResponsiveView = () => {
  const viewport = useViewport();

  const isTabletView = ref(viewport.isLessOrEquals('md'));
  const isMobileView = ref(viewport.isLessOrEquals('sm'));
  const isSmallDesktopView = ref(viewport.isLessOrEquals('lg'));
  const isDesktopView = ref(viewport.isGreaterOrEquals('xl'));

  const updateView = () => {
    isMobileView.value = viewport.isLessOrEquals('sm');
    isTabletView.value = viewport.isLessOrEquals('md');
    isSmallDesktopView.value = viewport.isLessOrEquals('lg');
    isDesktopView.value = viewport.isGreaterOrEquals('xl');
  };

  onMounted(() => {
    window.addEventListener('resize', updateView);
    updateView();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateView);
  });

  return {
    isTabletView: computed(() => isTabletView.value),
    isMobileView: computed(() => isMobileView.value),
    isDesktopView: computed(() => isDesktopView.value),
  };
}
