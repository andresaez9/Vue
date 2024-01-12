<template>
    <div>
      <button @click="openModal" class="mt-4 p-2 ml-4 bg-blue-500 text-white rounded">Abrir Filtros</button>
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="inset-0 bg-black opacity-50"></div>
        <div class="bg-white p-8 rounded shadow-lg relative z-50">
          
          <label for="prize" class="block text-sm font-medium text-gray-700">Rango de precio:</label>
          <input v-model="prize" type="range" id="prize" min="0" max="3000" class="w-full p-2 border rounded">
  
          <label for="numRoom" class="block mt-4 text-sm font-medium text-gray-700">Número de dormitorios:</label>
          <input v-model="numRoom" type="number" id="numRoom" class="w-full p-2 border rounded">
  
          <label for="capacity" class="block mt-4 text-sm font-medium text-gray-700">Capacidad máxima de huéspedes:</label>
          <input v-model="capacity" type="number" id="capacity" class="w-full p-2 border rounded">
  
          <button @click="search" class="mt-4 p-2 bg-blue-500 text-white rounded">Buscar</button>
  
          <button @click="closeModal" class="top-0 right-0 m-4 p-2 bg-gray-300 text-gray-700 rounded">Cerrar</button>
        </div>
      </div>
    </div>
  </template>

<script>
    import { ref, onMounted } from 'vue';
    import { useApartmentsStore } from '@/stores/Apartments';

    export default {
        name: 'FilterModal',
        props: ['neighborhoodSelected'],

        setup(props) {
            const {search:searchApartments} = useApartmentsStore()
            const isModalOpen = ref(false);
            const prize = ref(0);
            const numRoom = ref(1);
            const capacity = ref(1);

            const openModal = () => {
                isModalOpen.value = true;
            };
            const closeModal = () => {
                isModalOpen.value = false;
            };
            
            const search = () => {
                
                console.log('Realizando búsqueda con los siguientes filtros:', {
                    neighborhoods: props.neighborhoodSelected,
                    prize: prize.value,
                    numRoom: numRoom.value,
                    capacity: capacity.value,
                });
                
                const searchData = {
                barrio_id: props.neighborhoodSelected,
                bedrooms: numRoom.value,
                guests: capacity.value,
                min_price: prize.value,
                max_price: prize.value + 1,
                };

                searchApartments(searchData);
            };
            
            return {
                isModalOpen,
                prize,
                numRoom,
                capacity,
                openModal,
                closeModal,
                search,
            };
        },
    };
</script>