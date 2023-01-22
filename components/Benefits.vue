<template>
  <section
    id="benefits"
    class="bg-benefits-mobile-cover md:bg-benefits-cover bg-cover bg-center bg-no-repeat my-8"
  >
    <Title classes="h-16 md:h-[150px] w-3/4 md:w-[838px] z-10" radius="rounded-[20px]"
      >خصائص المنتج</Title
    >
    <div
      class="lg:w-3/4 md:w-2/3 md:mx-auto text-white w-full flex flex-row flex-wrap items-center justify-center px-4 mb-8"
    >
      <div
        class="md:p-8 w-3/4 lg:w-1/3 md:w-1/2 md:flex md:justify-center p-2 rounded-xl border border-black md:border-transparent"
        v-for="(benefit, i) in benefits"
        :key="i"
      >
        <div
          class="md:w-full bg-white rounded-xl"
          style="box-shadow: inset 0px -20px 3px 0px black"
        >
          <nuxt-img format="webp"
            class="rounded-lg object-cover h-32 w-full"
            :src="`img/mobile/benefits/${benefit.img}`"
            :alt="benefit.alt"
            style="pointer-events: none"
            onContextMenu="return false;"
          />
          <div class="p-5 h-48">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
              {{ benefit.text }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    benefits: [
      {
        img: "benefit_1-min.png",
        alt: "benefit_1",
        text: "يساعد على ازالة التجاعيد و معالجتها تماماً بعد ٣ اشهر",
      },
      {
        img: "benefit_2-min.png",
        alt: "benefit_2",
        text: "اخفاء و معالجة تجاعيد الرقبة و شد اجزاء الجلد المترهلة",
      },
      {
        img: "benefit_3-min.png",
        alt: "benefit_3",
        text: "يقي من الشيخوخة المبكرة و يمنح البشرة ترطيباً فائقاً",
      },
      {
        img: "benefit_4-min.png",
        alt: "benefit_4",
        text: "يساعد على ازالة بقع و تجاعيد اليد ومعالجتها",
      },
      {
        img: "benefit_5-min.png",
        alt: "benefit_5",
        text: "يساعد على تسريع وتيرة التئام الجروح و يقلل آثار الندبات",
      },
      {
        img: "benefit_6-min.png",
        alt: "benefit_6",
        text: "يساعد في ملئ حفر الوجة و ازالة  ترهلات الجلد بشكل تام",
      },
    ],
  }),
};
</script>
