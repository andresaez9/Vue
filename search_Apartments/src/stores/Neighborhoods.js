import { defineStore } from 'pinia';

export const useNeighborhoodsStore = defineStore('neighborhoods', {
    state: () => ({
        neighborhoods: []
    }),

    getters: {
        getNeighborhoods() {
            return this.neighborhoods;
        }
    },

    actions: {
        async fetchNeighborhoods() {
            try {
                const response = await fetch('https://api.dev.myplazze.com/api/v1/practice/barrios');
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching neighborhoods:', error);
            }
        },
    }
    
});