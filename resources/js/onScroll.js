export default {
    mounted(el, binding) {
      const onScroll = (event) => {
        if (binding.value && typeof binding.value === "function") {
          binding.value(event);
        }
      };
  
      el._onScroll = onScroll; // Simpan reference function agar bisa dihapus nanti
      window.addEventListener("scroll", onScroll);
    },
    beforeUnmount(el) {
      window.removeEventListener("scroll", el._onScroll);
      delete el._onScroll;
    }
  };
  