<template>
  <div
    class="bg-header rounded-lg flex items-center justify-center border border-header"
  >
    <div class="w-1/6 bg-header h-20 flex items-center justify-center icon-step">
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
      >
        <path
          d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"
        />
      </svg>
    </div>
    <div
      class="w-5/6 bg-[#1a1b1a] h-24 flex flex-col items-center justify-center px-1 rounded-lg body-step"
    >
      <p class="text-sm md:text-xl text-header">
        <slot />
      </p>
    </div>
  </div>
</template>
