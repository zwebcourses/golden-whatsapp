<template>
  <button
    title="Contact Sale"
    class="fixed z-90 bottom-10 right-8 bg-gradient-to-r from-header to-yellow-700 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-black font-extrabold text-sm hover:bg-black hover:drop-shadow-2xl hover:animate-bounce duration-300"
    @click="$emit('openDialog')"
  >
  تواصل معنا
  </button>
</template>