<template>
  <div class="mx-auto flex items-center justify-center px-4 mb-8">
    <div :class="`${classes} ${radius}`" class="bg-gradient-to-r from-header to-yellow-700 p-1">
      <div :class="radius" class="h-full w-full bg-[#1a1b1a] flex justify-center items-center">
        <h2
          class="text-transparent md:text-7xl text-3xl text-center font-extrabold bg-clip-text bg-gradient-to-r from-header to-yellow-700 lg:scale-x-125"
        >
        <slot />
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      Type: String,
      default: () => "",
    },
    radius: {
      Type: String,
      default: () => "md:rounded-[50px]",
    },
  },
};
</script>
