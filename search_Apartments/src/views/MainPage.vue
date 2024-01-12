<script setup>
    import NavbarResponsive from '@/components/NavbarResponsive/NavbarResponsive.vue';
    import Filters from '@/components/Filters/Filters.vue'
    import ApartmentList from '@/components/ApartmentList/ApartmentList.vue'
</script>

<template>
  <main>
    <NavbarResponsive />
    <Filters />
    <ApartmentList />
  </main>
</template>

<style>
  body {
    background-color: #f5f5f5;
  }
</style>