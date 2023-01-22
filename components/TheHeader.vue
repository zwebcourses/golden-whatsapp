<template>
  <nav
    class="w-full md:px-12 mx-auto md:flex md:justify-between md:items-center md:px-12 border-header bg-header relative z-30"
  >
    <div class="flex items-center justify-between">
      <router-link to="/">
        <nuxt-img
          format="webp"
          class="w-[40px] md:w-[80px]"
          src="/img/section_1/ultimate_logo.webp"
          alt="Golden_Collagen"
          style="pointer-events: none"
          onContextMenu="return false;"
        />
      </router-link>
      <!-- Mobile menu button -->
      <div @click="toggleMenu" class="flex md:hidden">
        <button
          type="button"
          class="text-black focus:outline-none focus:text-black"
        >
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
    >
      <li>
        <a
          href="#about-product"
          class="inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          عن المنتج
        </a>
      </li>
      <li>
        <a
          href="#features"
          class="inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          مميزات المنتج
        </a>
      </li>
      <li>
        <a
          href="#benefits"
          class="inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          خصائص المنتج
        </a>
      </li>
      <li>
        <a
          href="#how-to-use-product"
          class="inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          طريقة الاستخدام
        </a>
      </li>
      <li>
        <a
          href="#testimonial"
          class="inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          التقييم
        </a>
      </li>
      <li>
        <a
          href="#price"
          class="inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          السعر
        </a>
      </li>
      <li>
        <a
          href="#form"
          class="hidden md:inline-block clickable mt-0 hover:text-header px-4 py-2 rounded hover:bg-black mr-2"
        >
          الطلب
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
  }),
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      this.$emit("hideLabel", this.showMenu);
    },
  },
};
</script>
