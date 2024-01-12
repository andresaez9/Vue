<template>
    <button @click="search" class="mt-4 mb-4 p-2 ml-4 bg-blue-700 text-white rounded">Buscar</button>
    <button @click="clear" class="mt-4 mb-4 p-2 ml-4 bg-red-700 text-white rounded">Limpiar</button>
</template>

<script>
    import { useApartmentsStore } from '@/stores/Apartments';
    
    export default {
        name: 'SearchButton',
        props: ['neighborhoodSelected'],

        setup(props) {
            
            const {search:searchApartments, clear:clearApartments} = useApartmentsStore()

            const search = () => {

                const searchData = {
                    barrio_id: props.neighborhoodSelected,
                };
        
                searchApartments(searchData);
            };

            const clear = () => {
               clearApartments();
            };

            return {
                search,
                clear
            };
        }
    };
</script>

<style>
</style>