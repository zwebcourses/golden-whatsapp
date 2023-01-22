<template>
  <section
    id="price"
    class="block bg-price-mobile-cover bg-cover bg-center my-8 pt-8 pb-4 mb-8 relative overflow-hidden"
  >
    <div class="w-full mx-auto flex items-center justify-center">
      <div
        class="h-24 md:h-[150px] w-full lg:w-5/6 md:w-full rounded-[20px] md:rounded-[50px] bg-gradient-to-r from-header to-yellow-800 p-1"
      >
        <div
          class="h-full w-full rounded-[20px] md:rounded-[50px] bg-[#1a1b1a] flex justify-center items-center"
        >
          <h5
            class="text-transparent md:text-3xl text-xl text-center font-extrabold bg-clip-text bg-gradient-to-r from-header to-yellow-800 lg:scale-x-125"
          >
            <span class="md:hidden block">
              ضمان حماية المستهلك ١٤ يوم للاسترجاع<br />
              في حالة لم تحصل على نتائج مرضية
            </span>
            <span class="hidden md:block">
              ضمان حماية المستهلك ١٤ يوم للاسترجاع في حالة لم تحصل على نتائج مرضية
            </span>
          </h5>
        </div>
      </div>
    </div>
    <div
      class="w-full mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start px-4 mt-8 relative md:overflow-visible overflow-hidden"
    >
      <div class="w-full">
        <h2 class="w-full text-5xl lg:text-7xl text-white text-center">سعر المنتج</h2>
        <div class="flex items-center justify-center mt-4">
          <span class="text-5xl lg:text-7xl text-white ml-2 strikethrough">٤٠٠</span>
          <p class="text-xl lg:text-4xl text-gray-300">ريال سعودي</p>
        </div>
        <div class="flex items-center justify-center mt-4">
          <h2 class="text-3xl lg:text-4xl text-white">عرض حصري</h2>
        </div>
        <div class="flex items-center justify-center mt-4">
          <h2 class="text-5xl lg:text-7xl text-white ml-2">٣٠٠</h2>
          <p class="text-xl lg:text-4xl text-gray-300">ريال سعودي</p>
        </div>

        <div class="hidden mx-auto w-1/2 md:flex md:items-center md:justify-center mt-4">
          <CTAButton />
        </div>
      </div>
      <div
        class="lg:w-full md:w-[129%] mx-auto lg:-mt-[301px] -mt-[230px] -mr-[100px] lg:-mr-[283px]"
      >
        <nuxt-img format="webp"
          src="/img/section_6/bottels_with_stamp.png"
          alt="bottels"
          stye="pointer-events: none;"
          onContextMenu="return false;"
        />
      </div>
    </div>
  </section>
</template>
<script>
import CTAButton from "~/components/CTAButton.vue";
export default {
  components: {
    CTAButton,
  },
};
</script>
<style>
.strikethrough {
  position: relative;
}
.strikethrough:before {
  position: absolute;
  content: "";
  left: 0;
  top: 45%;
  right: 0;
  border-top: 5px solid;
  border-color: red;
  -webkit-transform: rotate(-25deg);
  -moz-transform: rotate(-25deg);
  -ms-transform: rotate(-25deg);
  -o-transform: rotate(-25deg);
  transform: rotate(-25deg);
}
</style>
