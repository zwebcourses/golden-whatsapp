<template>
  <div>
    <CallToAction />
    <About />
    <Features />
    <Benefits />
    <HowToUse />
    <Testimonial />
    <Price />
    <FormSection />
    <TheFooter />
    <FloatBtn v-on:openDialog="dialog = true" />
    <TheDialog v-on:closeDialog="dialog = false" v-if="dialog" />
  </div>
</template>
<script>
export default {
  components: {
    Loader: () => import(/* webpackChunkName: 'Loader' */ "~/components/Loader.vue"),
    CallToAction: () =>
      import(/* webpackChunkName: 'CallToAction' */ "~/components/CallToAction.vue"),
    About: () => import(/* webpackChunkName: 'About' */ "~/components/About.vue"),
    Features: () =>
      import(/* webpackChunkName: 'Features' */ "~/components/Features.vue"),
    Benefits: () =>
      import(/* webpackChunkName: 'Benefits' */ "~/components/Benefits.vue"),
    HowToUse: () =>
      import(/* webpackChunkName: 'HowToUse' */ "~/components/HowToUse.vue"),
    Testimonial: () =>
      import(/* webpackChunkName: 'Testimonial' */ "~/components/Testimonial.vue"),
    Price: () => import(/* webpackChunkName: 'Price' */ "~/components/Price.vue"),
    FormSection: () =>
      import(/* webpackChunkName: 'FormSection' */ "~/components/FormSection.vue"),
    TheFooter: () =>
      import(/* webpackChunkName: 'TheFooter' */ "~/components/TheFooter.vue"),
    TheDialog: () =>
      import(/* webpackChunkName: 'TheDialog' */ "~/components/TheDialog.vue"),
    FloatBtn: () =>
      import(/* webpackChunkName: 'FloatBtn' */ "~/components/FloatBtn.vue"),
  },
  data: () => ({
    dialog: false,
  })
};
</script>
