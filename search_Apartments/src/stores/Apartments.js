import { defineStore } from "pinia";

export const useApartmentsStore = defineStore('apartments', {
    state: () => ({
        apartments: []
    }),

    getters: {
        getApartments(state) {
            return state.apartments;
        }
    },

    actions: {
        async search(searchData) {
            try{
                const response = await fetch('https://api.dev.myplazze.com/api/v1/practice/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                        body: JSON.stringify(searchData),
                    });
                    if (!response.ok) {
                        throw new Error('Error al realizar la búsqueda de apartamentos');
                    }
                
                    const result = await response.json();
                    this.apartments = result;
                    return result;
                } catch(error) {
                    console.error('Error en la búsqueda de apartamentos:', error);
                };
        },

        clear() {
            this.apartments = [];
        }
    }
    
});