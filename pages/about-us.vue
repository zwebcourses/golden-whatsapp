<template>
  <div>
    <TheHeader />
    <FloatBtn v-on:openDialog="dialog = true" />
    <TheDialog v-on:closeDialog="dialog = false" v-if="dialog" />
    <div class="w-full relative bg-white">
      <div class="h-[200px] w-full flex justify-center bg-black">
        <div class="lg:w-3/4">
          <h1 class="text-header text-5xl font-extrabold p-4 text-center lg:my-8">نبذة عنا</h1>
          <div
            class="w-full flex flex-col justify-center items-center space-y-2 bg-white p-8 shadow-xl"
          >
            <h3 class="text-2xl font-extrabold text-center">مهمتنا</h3>
            <p class="text-center text-xl font-normal">
              تتلخص مهمة Ultimate Wellness التابعه لمجموعه شركات المحضر كابيتل و التي
              يمتلكها رجل الاعمال السعودي عمران محضر في جعل منتجات الصحة والعافية في
              متناول الجميع.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center bg-white mt-[180px] pb-4">
        <div class="lg:w-3/4">
          <h3 class="text-4xl font-extrabold text-center my-6">لمحة عن Ultimate Wellness</h3>
          <div class="w-full flex flex-wrap justify-center bg-white">
            <div
              v-for="(detail, i) in details"
              :key="i"
              class="lg:w-1/3 w-3/4 text-center px-8"
            >
              <div class="rounded-full flex justify-center items-center">
                <nuxt-img
                  format="webp"
                  class="rounded-full bg-header h-[40px] w-[40px] my-2"
                  :src="`img/about/${detail.icon}`"
                  style="pointer-events: none"
                  onContextMenu="return false;"
                />
              </div>
              <div>
                <h3 class="text-2xl font-bold">{{ detail.title }}</h3>
              </div>
              <div>{{ detail.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col lg:flex-row justify-center items-center bg-white mt-[50px] pb-4">
        <div class="lg:w-1/2 w-3/4">
          <nuxt-img
            format="webp"
            class="w-3/4 m-2 p-4"
            :src="`img/section_1/ultimate_logo.webp`"
            style="pointer-events: none"
            onContextMenu="return false;"
          />
        </div>
        <div class="lg:w-1/3 w-3/4">
          <h3 class="text-4xl font-extrabold text-right my-6">
            تقدم علامات Ultimate Wellness التجارية أفضل قيمة ممكنة
          </h3>
          <div>
            <h5 class="text-xl font-extrabold text-right">نصنعه ونبيعه بواسطتنا فقط</h5>
            <p>
              وفر نقودك بتسوق المنتجات المنزلية من Ultimate Wellness والتي نصنعها ونبيعها مباشرة من
              أجلك - بدون وساطة من أي بائع خارجي.
            </p>
          </div>
          <div class="mt-4">
            <h5 class="text-xl font-extrabold text-right">جودة ممتازة</h5>
            <p>
              تلبي كافة منتجات علامة Ultimate Wellness التجارية أكثر المعايير صرامة وممارسات التصنيع
              الجيدة التي وضعتها إدارة الغذاء والدواء. نستخدم فقط مواد خام مستوفاة البحث،
              ومكونات فريدة، وتوليفات موثوقة.
            </p>
          </div>
          <div class="mt-4">
            <h5 class="text-xl font-extrabold text-right">
              ضمان استرداد أموال لمدة 14 يومًا
            </h5>
            <p>
              إننا نثق بشكل تام في علامة Ultimate Wellness التجارية التي نقدمها لدرجة أننا نقدم
              إمكانية الاسترداد الكامل إذا لم تعجبك منتجاتنا.
            </p>
          </div>
          <div class="mt-4">
            <h5 class="text-xl font-extrabold text-right">منتجات مختبرة على نحو مستقل</h5>
            <p>
              قدمنا لك برنامج Wellness للحصول على المنتجات من علامتنا التجارية Ultimate Wellness بعد
              اختبارها من قبل أطراف خارجية للتأكد من الجودة. هذا البرنامج جزء من التزامنا
              بتوصيل منتجات تلبي أعلى المعايير.
            </p>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
<script>
export default {
  components: {
    TheHeader: () =>
      import(/* webpackChunkName: 'TheHeader' */ "~/components/TheHeader.vue"),
    TheFooter: () =>
      import(/* webpackChunkName: 'TheFooter' */ "~/components/TheFooter.vue"),
    TheDialog: () =>
      import(/* webpackChunkName: 'TheDialog' */ "~/components/TheDialog.vue"),
    FloatBtn: () =>
      import(/* webpackChunkName: 'FloatBtn' */ "~/components/FloatBtn.vue"),
  },
  data: () => ({
    dialog: false,
    details: [
      {
        icon: "lined-global-ccl@3x.webp",
        title: "أكثر من 30 دولة",
        text:
          "نوصل منتجات الصحة والعافية للجميع حول العالم بـ 5 لغة، و20 عملة، و6 خيار دفع.",
      },
      {
        icon: "lined-trial@3x.webp",
        title: "ما يزيد عن ٣٠ منتج",
        text:
          "نقدم نفس العلامات التجارية الشهيرة الموجودة في المتاجر الوطنية الكبيرة. تشحن Ultimate Wellness وتبيع جميع المنتجات بنفسها وليس بواسطة بائعين خارجيين يرسلون منتجات زائفة.",
      },
      {
        icon: "lined-star@3x.webp",
        title: "ما يزيد عن 20000 تقييم موثوق",
        text:
          "نسمح فقط بكتابة التقييمات بعد طلب العملاء للمنتج المحدد من Ultimate Wellness وهكذا يمكنك الشراء بطريقة أكثر ذكاءً.",
      },
      {
        icon: "lined-guarantee@3x.webp",
        title: "ما يزيد عن ١٠٠،٠٠٠ عميل نشط",
        text: "يعاود ما يزيد عن ١٠٠،٠٠٠ عميل زيارتنا للحصول على صفقات ومنتجات ومكافآت.",
      },
      {
        icon: "lined-global-ccl@3x.webp",
        title: "ما يزيد عن ١٠٠ موظف في فريقنا",
        text: "إننا بالفعل شركة عالمية وأعضاء فريقنا ينتشرون حول العالم.",
      },
      {
        icon: "centers.svg",
        title: "٢ مراكز معالجة",
        text:
          "مراكز المعالجة والمخازن الخاصة بنا مكيفة الهواء ومتوافقة مع ممارسات التصنيع الجيدة أو معايير أيزو للحفاظ على سلامة ونضارة المنتجات.",
      },
    ],
  }),
  head: {
    title: "من نحن - جولدن كولاجين",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "من نحن - جولدن كولاجين",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>
