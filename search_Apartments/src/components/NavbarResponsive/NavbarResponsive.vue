<template>
  <nav class="nav-main flex items-center justify-between p-4 bg-gray-800 text-white">
    
    <button class="btn-hamburger md:hidden" @click="toggleMobileNav">&#9776;</button>

    <LogoMintyHost />

    <div class="hidden md:flex justify-around">
      <ListadoPaginas />
    </div>

    <transition name="fade">
      <div v-show="showMobileNav" class="md:hidden fixed top-16 left-0 right-0 bg-gray-800 text-white">
        <ListadoPaginas />
      </div>
    </transition>

    <SelectorIdioma />
  </nav>
</template>

<script>
import LogoMintyHost from '@/components/NavbarResponsive/components/LogoMintyHost.vue';
import ListadoPaginas from '@/components/NavbarResponsive/components/ListadoPaginas.vue';
import SelectorIdioma from '@/components/NavbarResponsive/components/SelectorIdioma.vue';

export default {
  name: 'NavbarResponsive',
  components: {
    LogoMintyHost,
    ListadoPaginas,
    SelectorIdioma,
  },
  data() {
    return {
      showMobileNav: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
  },
};
</script>

<style scoped>
.btn-hamburger {
  font-size: x-large;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
