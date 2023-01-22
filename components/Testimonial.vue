<template>
  <section
    id="testimonial"
    class="block bg-testimonial-mobile-cover bg-cover bg-center my-8 pt-8 pb-4 mb-8 relative"
  >
    <Title classes="h-16 md:h-[150px] w-3/4 md:w-[838px]" radius="rounded-[20px]"
      >أراء المستخدمين</Title
    >
    <div class="mx-auto">
      <no-ssr placeholder="Loading...">
        <carousel-3d
          :autoplay="false"
          :autoplay-timeout="3000"
          :controls-visible="true"
          :controls-prev-html="'&#x203A; '"
          :controls-next-html="'&#x2039; '"
          :controls-width="10"
          :controls-height="30"
          :clickable="true"
        >
          <!-- class="h-[500px] md:h-[345px]" -->
          <slide
            class="rounded-full"
            v-for="(reviewer, i) in reviewers"
            :key="i"
            :index="i"
          >
            <div class="bg-white">
              <nuxt-img format="webp"
                class="rounded-full mx-auto mt-8"
                :src="`img/mobile/reviewers/${reviewer.img}`"
                :alt="reviewer.alt"
                style="pointer-events: none;"
                onContextMenu="return false;"
              />
              <div class="p-2 text-center">
                <h6 class="text-xl font-bold text-black">
                  {{ reviewer.name }}
                </h6>
              </div>
              <div class="px-4 text-center h-60">
                <p class="font-bold text-gray-800">
                  {{ reviewer.text }}
                </p>
              </div>
            </div>
          </slide>
        </carousel-3d>
      </no-ssr>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Title: () => import(/* webpackChunkName: 'Title' */ "~/components/Title.vue"),
  },
  data: () => ({
    reviewers: [
      {
        img: "1-min.png",
        alt: "review_1",
        name: "عبد العزيز الحميد",
        text:
          "جزاكم الله خيراً . كان عندى تصبغات فى الجلد وبعض الترهلات فى الجبهة والحمد لله اقدر اقول ان راح اغلبهم وباقى ما كملت شهر",
      },
      {
        img: "4-min.png",
        alt: "review_2",
        name: "مرام ابا الخيل",
        text:
          "ما شاء الله لا قوة الا بالله نضااااااااااااره وخدودى زردت وصارت مليانة انا طايره من الفررررحه على موضوع الخدود واللى زاد الفرحه صديقتى ما شافتنى من فترة وزارتنى مالاسبوع اللى راح قالتلى ما شاء اللهعليك حليااااانهوبشرتك صايره تحنن",
      },
      {
        img: "3-min.png",
        alt: "review_3",
        name: "سعود الدوسري",
        text:
          "ممتاز والله . كنه سحر بأقل من 5 دقايق بدات تروح علامات التجاعيد اللى بالخد وحول العين . والله من جد تقل صغرنا 20 سنه",
      },
      {
        img: "2-min.png",
        alt: "review_4",
        name: "سهيل موسى المطيري",
        text:
          "ما توقعت انه يخفي اثار جرح وكنت احسب ان بحتاج اسوي ليزر بس صراحهاتصدمت من النتيجه . جد والله فوق الممتاز واختفى 80% تقريبا من اثار الجرح",
      },
      {
        img: "5-min.png",
        alt: "review_5",
        name: "فاطمة محمد الدغيري",
        text:
          "بنصح فيه كتير ممتاز . جربوه اخدتها على نصيحهاكتر من حدا جربها واستفاد . الاستخدام سهل الجودة ممتازه.الحجم مناسب.الرائحة لطيفة ",
      },
    ],
  }),
};
</script>

<style>
.carousel-3d-container {
  height: 345px !important;
}
@media (min-width: 320px) {
  .carousel-3d-container {
    height: 450px !important;
  }
  .carousel-3d-slide img {
  width: 80px !important;
  height: 80px !important;
}
}
.carousel-3d-slide {
  height: unset !important;
}
.carousel-3d-slide img {
  width: 120px !important;
  height: 120px !important;
}
.Next slide span {
  font-size: 180px;
  color: #fff;
}
.carousel-3d-container .next span {
  font-size: 180px;
  color: #fff;
}
.carousel-3d-container .prev span {
  font-size: 180px;
  color: #fff;
}

.carousel-3d-container a.prev {
  width: 50px !important;
}
.carousel-3d-slide {
  width: 280px !important;
  box-shadow: black 0px 0px 16px 14px !important;
  border-radius: 0.75rem !important;
  background-color: #fff !important;
}
.carousel-3d-slider {
  display: flex !important;
  justify-content: center !important;
}
</style>
