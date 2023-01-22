<template>
  <section
    id="about-product"
    class="block bg-about-mobile-cover bg-cover bg-center my-8 float-none"
  >
    <Title classes="h-16 md:h-[150px] w-3/4 md:w-[838px]"
    radius="rounded-[20px]">عن المنتج</Title>
    <div
      class="w-5/6 md:w-1/3 mx-auto rounded-md bg-gradient-to-r from-header to-yellow-800 p-1"
    >
      <iframe
        class="w-full h-60 md:h-72"
        src="https://www.youtube.com/embed/TadOPlNgIRY"
        title="Golden Collagen"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="w-2/3 md:w-1/6 mx-auto mt-8">
      <CTAButton />
    </div>
  </section>
</template>
<script>
export default {
  components: {
    Title: () => import(/* webpackChunkName: 'Title' */ "~/components/Title.vue"),
    CTAButton: () =>
      import(/* webpackChunkName: 'CTAButton' */ "~/components/CTAButton.vue"),
  },
};
</script>
