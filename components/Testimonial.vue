<template>
  <section
    id="testimonial"
    class="block bg-testimonial-mobile-cover bg-cover bg-center my-8 pt-8 pb-4 mb-8 relative"
  >
    <Title
      classes="h-16 md:h-[150px] w-3/4 md:w-[838px]"
      radius="rounded-[20px]"
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
          <slide v-for="(reviewer, i) in reviewers" :key="i" :index="i">
            <div
              class="bg-[#EAE5DF] p-4 min-h-[350px] flex flex-col justify-center items-center"
            >
              <div
                class="w-11/12 bg-[#E5FFD5] px-2 pt-2 mb-8 text-right text-sm rounded-[10px]"
              >
                <span class="font-bold">{{ reviewer.message }}</span><br />
                <span class="text-[#7E7E7E] flex justify-end items-center text-xs" dir="ltr">
                  {{ reviewer.timeMessage }}
                  <nuxt-img
                    format="webp"
                    :src="`/img/mobile/reviewers/${reviewer.icon}.png`"
                    alt="icon"
                    style="pointer-events: none"
                    onContextMenu="return false;"
                    class="ml-[4px] mb-[2px]"
                  />
                </span>
              </div>
              <div
                class="w-11/12 bg-[#FFFFFF] px-4 pt-4 text-right text-sm rounded-[10px] inline-block"
              >
                <p v-if="reviewer.header">{{ reviewer.header }}</p>
                <span class="font-bold">{{ reviewer.response }}</span><br />
                <span class="text-[#7E7E7E] text-xs" dir="ltr">
                  {{ reviewer.timeResponse }}
                </span>
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
    Title: () =>
      import(/* webpackChunkName: 'Title' */ "~/components/Title.vue"),
  },
  data: () => ({
    reviewers: [
      {
        message:
          "اهلا وسهلا فيك معك ريم من خدمة عملاء التميت ويلنس و بدنا تقييم لتجربتكم لجولدن كولاجين ☺️",
        header: "ماشاء الله لاقوة الا بالله",
        response:
          "نضاااااااااااااااااره وخدودي وردت وصارت مليانة انا طايرة من الفررررحه على موضوع الخدود واللي زاد الفرحه صديقتي ماشافتني من فترة وزارتني الاسبوع اللي راح قالتلي ماشاء الله عليك حلياااانه وبشرتك صايره تجنن",
        timeMessage: "7:00 AM",
        timeResponse: "7:18 AM",
        icon: 'check-active',
      },
      {
        message:
          "السلام عليكم معك علاء من خدمة عملاء التيميت ويلنس و حابين نعرف رايك في الكريم 😃",
        response:
          "وعليكم السلام . جزاكم الله خير كان عندي تصبغات في الجلد و بعض الترهلات في الجبهة و الحمدلله اقدر اقول ان راح اغلبهم و باقي ما كملت شه",
        timeMessage: "9:50 PM",
        timeResponse: "4:35 AM",
        icon:'check',
      },
      {
        message: "السلام عليكم ايش اخبار جولدن كولاجين معكم ؟",
        response:
          "وعليكم السلام ورحمة الله وبركاته. صراحه ما توقعت انه يخفي اثار جرح وكنت احسب اني بحتاج اسوي ليزر بس صراحه انصدمت من النتيجه . جد والله فوق الممتاز و اختفي 80% تقريبا من اثار الجرح",
        timeMessage: "9:51 PM",
        timeResponse: "11:10 PM",
        icon:'check',
      },
      {
        message:
          "اهلا بك ، معك فريال من خدمة عملاء التميت ويلنس و نتمنى تشاركنا برايك و تقييمك للمنتج جولدن كولاجين",
        response:
          "الاستخدام سهل و الجودة ممتازة و الحجم مناسب و ريحته مره زينة . بنصح فيه كتير ممتاز . جربوه اخذتها على نصيحة اكثر من حدا جربها و استفاد",
        timeMessage: "1:22 PM",
        timeResponse: "6:29 PM",
        icon: 'check-active',
      },
      {
        message:
          "السلام عليكم ، حابين تشاركنا رايك في كريم جولدن كولاجين و كيف كانت النتيجه",
        response:
          "وعليكم السلام ، ممتاز والله كنه سحر باقل من ٥ دقايق بدات تروح علامات التجاعيد اللي بالخد و حول العين ، والله من جد تقل صغرنا ٢٠ سنه",
        timeMessage: "6:15 PM",
        timeResponse: "8:55 PM",
        icon: 'check-active',
      },
    ],
  }),
};
</script>

<style>
.carousel-3d-container {
  height: 345px !important;
  font-family: sans-serif !important;
}
@media (min-width: 320px) {
  .carousel-3d-container {
    height: 450px !important;
  }
  .carousel-3d-slide img {
    width: 15px !important;
    height: 15px !important;
  }
}
.carousel-3d-slide {
  height: unset !important;
}
.carousel-3d-slide img {
  width: 15px !important;
  height: 15px !important;
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
  /* background-color: #fff !important; */
}
.carousel-3d-slider {
  display: flex !important;
  justify-content: center !important;
}
</style>
