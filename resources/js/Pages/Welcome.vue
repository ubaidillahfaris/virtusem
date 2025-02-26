<template>
  <section ref="hero" v-intersect="(entry) => handleIntersect(entry, 'hero')"
    class="min-h-[70vh] md:min-h-[80vh] flex justify-center items-center">
    <Hero v-if="currentSection === 'hero'" class="animate-fadeIn" />
  </section>

  <section ref="product" v-intersect="(entry) => handleIntersect(entry, 'product')"
    class="min-h-[70vh] md:min-h-[80vh] flex justify-center items-start">
    <ProductList v-if="currentSection === 'product'" class="animate-fadeIn" />
  </section>

  <section ref="footer" v-intersect="(entry) => handleIntersect(entry, 'footer')" class="min-h-[70vh] md:min-h-[80vh]">
    <Footer v-if="currentSection === 'footer'" class="animate-fadeIn" />
  </section>
</template>

<script>
import Footer from "@/Components/Footer.vue";
import Hero from "@/Components/Home/Hero.vue";
import ProductList from "@/Components/Home/ProductList.vue";
import App from "./App.vue";

export default {
  components: { Hero, ProductList, Footer, App },
  data() {
    return {
      currentSection: "hero",
    };
  },
  directives: {
    intersect: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            binding.value(entry);
          },
          { threshold: 0.5 } // Memastikan 50% terlihat sebelum berpindah
        );
        observer.observe(el);
      },
    },
  },
  methods: {
    handleIntersect(entry, section) {
      if (entry.isIntersecting) {
        this.currentSection = section;
      }
    },
  },
};
</script>