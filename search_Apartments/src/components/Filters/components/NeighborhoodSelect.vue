<template>
    <div class="ml-4 mt-4">
      <label for="neighborhood" class="block text-sm font-medium text-gray-700">Selecciona un barrio:</label>
      <select v-model="neighborhoodSelected" @change="$emit('neighborhood-selected', neighborhoodSelected)" id="neighborhood" class="mt-1 block w-full p-2 border border-gray-300 rounded-md max-w-md">
        <option value="">Todos los barrios</option>
        <option v-for="neighborhood in neighborhoods" :key="neighborhood.id" :value="neighborhood.id" class="text-gray-900">{{ neighborhood.name }}</option>
      </select>
    </div>
  </template>
  
  

<script>
    import { ref, onMounted, useCssModule } from 'vue';
    import { useNeighborhoodsStore } from '@/stores/Neighborhoods';
    
    export default {
        name: 'NeighborhoodSelect',
        emits: ['neighborhood-selected'],
        setup() {
            const neighborhoodSelected = ref('');
            const neighborhoods = ref([]);
            const { fetchNeighborhoods } = useNeighborhoodsStore();
            onMounted(async () => {
                neighborhoods.value = await fetchNeighborhoods();
            });
            return {
                neighborhoodSelected,
                neighborhoods,
            };
        },
    };
</script>