<template>
  <div class="flex items-center justify-center h-screen bg-black">
    <div class="p-4 rounded shadow-lg ring ring-header">
      <div class="flex flex-col items-center space-y-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-header w-28 h-28"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 class="text-4xl font-bold text-header">شكرا لك !</h1>
        <p class="text-gray-200">سيتم متابعة الطلب معك فى أقرب وقت.</p>
        <a
          class="inline-flex items-center px-4 py-2 text-black bg-header border border-header rounded rounded-full hover:bg-black hover:text-header focus:outline-none focus:ring"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <nuxt-link class="text-sm font-medium" :to="{ name: 'index' }"
            >صفحة المنتج</nuxt-link
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: " شكرا لك لشرائك جولدن كولاجين",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "شكرا لك",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>
