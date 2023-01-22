<template>
  <section
    id="how-to-use-product"
    class="block bg-about-mobile-cover bg-cover bg-center my-8 float-none"
  >
    <Title classes="h-16 md:h-[150px] w-3/4 md:w-[838px]" radius="rounded-[20px]"
      >طريقة الاستخدام</Title
    >
    <div>
      <div class="flex flex-col lg:flex-row">
        <div v-for="(step, i) in steps" :key="i" class="w-full lg:w-1/3 text-center px-8 mb-2">
          <StepCard>
            {{ step }}
          </StepCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Title: () => import(/* webpackChunkName: 'Title' */ "~/components/Title.vue"),
    StepCard: () =>
      import(/* webpackChunkName: 'StepCard' */ "~/components/StepCard.vue"),
  },
  data: () => ({
    steps: [
      "يتم وضع طبقة كافية من الكريم على الوجه و الرقبة بعد تنظيفهما",
      "التدليك بحركات الى الاعلى و الى الخارج",
      "نتائج لحظيه خلال دقيقتين",
    ],
  }),
};
</script>
