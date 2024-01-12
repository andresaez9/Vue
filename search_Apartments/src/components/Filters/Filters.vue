<template>
    <div>
        <NeighborhoodSelect @neighborhood-selected="getNeighborhoodSelected"/>

        <FilterModal :neighborhoodSelected="neighborhoodSelected" />

        <SearchButton 
          :neighborhoodSelected="neighborhoodSelected" 
        />
    </div>
  </template>
  
  <script>
  import NeighborhoodSelect from './components/NeighborhoodSelect.vue';
  import FilterModal from './components/FilterModal.vue';
  import SearchButton from './components/SearchButton.vue';
  import { ref } from 'vue';
  
  export default {
    components: {
      NeighborhoodSelect,
      FilterModal,
      SearchButton,
    },
    setup() {
      const neighborhoodSelected = ref('');
      const getNeighborhoodSelected = (neighborhood) => {
        neighborhoodSelected.value = neighborhood;
      };

      return {
        neighborhoodSelected,
        getNeighborhoodSelected
      };
    },
};
  </script>  
  
  <style scoped>
    
  </style>
  