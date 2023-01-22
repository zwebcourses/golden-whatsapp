<template>
  <section class="bg-cta-mobile-cover bg-no-repeat lg:bg-cta-cover bg-cover lg:bg-center overflow-hidden">
    <TheHeader v-on:hideLabel="(status) => hideLabelFun(status)" />
    <!-- Label In Mobile -->
    <div v-if="showLabel" class="md:hidden block flex justify-end -mt-[50px] ml-[17px] p-0">
      <nuxt-img format="webp"
        class="w-[110px] h-[170px]"
        src="/img/mobile/label.png"
        alt="label"
        style="pointer-events: none"
        onContextMenu="return false;"
      />
      <div class="absolute top-[44px] left-[34px] flex text-center flex-col flex-wrap">
        <span class="font-extrabold text-sm">عرض حصرى</span>
        <span class="font-bold text-sm">خصم <span class="font-extrabold">٢٥٪</span></span>
        <span class="font-bold text-sm">لفترة محدوده</span>
      </div>
    </div>
    <!-- Header Text -->
    <div class="flex flex-col justify-between">
      <div class="flex justify-end items-center md:mt-12">
        <div
          class="w-full md:w-5/6 md:p-5 flex flex-col md:flex-row flex-wrap justify-center items-center"
        >
          <div>
            <h1
              class="md:text-7xl text-header text-4xl text-center uppercase bg-clip-text bg-gradient-to-r from-header to-yellow-700 lg:scale-x-125 product-name"
            >
              Golden Collagen
            </h1>
            <p
              class="md:text-8xl text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-header to-yellow-700 scale-x-105 lg:scale-x-125"
            >
              جولدن كولاجين
            </p>
          </div>
          <div class="mt-8 flex justify-center z-10">
            <p
              class="hidden md:flex md:text-6xl text-4xl text-center w-full md:w-2/3 text-white md:my-8"
            >
              اطلبه الان واحصل على خصم ٢٥٪ لفترة محدودة
            </p>
            <p class="md:hidden flex text-2xl text-center uppercase w-full text-white">
              المنتج رقم 1 فى السعودية<br />
              لازالة التجاعيد
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-end relative">
        <!-- Product Image -->
        <div class="md:hidden w-[140%] absolute bottom-[0] -right-[105px]">
          <nuxt-img  format="webp"
            class="md:hidden block w-[100px] absolute bottom-[24px] right-[124px]"
            src="/img/mobile/stamp_2.png"
            alt="stamp"
            style="pointer-events: none"
            onContextMenu="return false;"
          />
          <nuxt-img  format="webp"
            src="/img/section_1/bottels.webp"
            alt="bottels_with_stamp"
            style="pointer-events: none"
            onContextMenu="return false;"
          />
        </div>
        <div
          class="hidden md:block place-self-center absolute right-[2px] bottom-[-33px] w-[70%]"
        >
          <nuxt-img  format="webp"
            src="/img/section_1/bottels_with_stamp.webp"
            alt="bottels_with_stamp"
            style="pointer-events: none"
            onContextMenu="return false;"
          />
        </div>
        <!-- Call To Action -->
        <div
          class="w-1/2 md:w-1/6 md:ml-[445px] md:flex md:justify-center place-self-center mt-5 ml-[40px] z-10 mx-auto"
        >
          <CTAButton />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    TheHeader: () =>
      import(/* webpackChunkName: 'TheHeader' */ "~/components/TheHeader.vue"),
    CTAButton: () =>
      import(/* webpackChunkName: 'CTAButton' */ "~/components/CTAButton.vue"),
  },
  data: () => ({
    showLabel: true
  }),
  methods: {
    hideLabelFun(status) {
      this.showLabel = !status
    }
  }
};
</script>
