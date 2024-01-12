<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mr-4">
      <div v-for="apartment in apartmentStore.getApartments" :key="apartment.id" class="bg-white overflow-hidden shadow-md rounded-lg">
        <div class="relative">
          <div class="carousel">
            <div class="carousel__inner">
              <div v-for="(image, index) in apartment.pic" :key="index" class="carousel__item">
                <img :src="image" alt="Imagen del apartamento" class="w-full h-48 object-cover rounded-t-lg">
              </div>
            </div>
            
            <button class="carousel__button carousel__button--prev" aria-label="Anterior">
              <svg viewBox="0 0 24 24" class="carousel__icon">
                <path d="M15.5 3.25L6.5 12l9 8.75"></path>
              </svg>
            </button>
            <button class="carousel__button carousel__button--next" aria-label="Siguiente">
              <svg viewBox="0 0 24 24" class="carousel__icon">
                <path d="M8.5 3.25L17.5 12l-9 8.75"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="px-6 py-4">
          <h2 class="text-xl font-bold mb-2">{{ apartment.address }}</h2>
          <p class="text-gray-700">Capacidad Máxima: {{ apartment.accommodates_max }}</p>
          <div class="flex items-center mt-2">
            <p class="text-gray-700 mr-2">Comodidades:</p>
            <span v-if="apartment.amenities['A/C']" class="badge bg-gray-300 text-gray-700">Aire Acondicionado</span>
            <span v-if="apartment.amenities.heating" class="badge bg-gray-300 text-gray-700">Calefacción</span>
            <span v-if="apartment.amenities.wifi" class="badge bg-gray-300 text-gray-700">Wifi</span>
          </div>
          <p class="text-gray-700">Barrio: {{ apartment.barrio.name }}</p>
          <p class="text-gray-700">Baño: {{ apartment.bathrooms }}</p>
          <p class="text-gray-700">Dormitorios: {{ apartment.bedrooms }}</p>
          <p class="text-gray-700">Precio/Mes: {{ apartment.monthly_price }}€</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <p class="text-gray-700">Metros Cuadrados: {{ apartment.square_meter }}</p>
          <p class="text-gray-700">Ciudad: {{ apartment.town }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useApartmentsStore } from '@/stores/Apartments';
  import { ref, onMounted } from 'vue';
  
  const apartmentStore = useApartmentsStore();
  
  const carouselInner = ref(null);
  
  const prevSlide = () => {
    if (carouselInner.value) {
      carouselInner.value.scrollLeft -= 200;
    }
  };
  
  const nextSlide = () => {
    if (carouselInner.value) {
      carouselInner.value.scrollLeft += 200;
    }
  };
  
  onMounted(() => {
    const prevButton = document.querySelector('.carousel__button--prev');
    const nextButton = document.querySelector('.carousel__button--next');
  
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', prevSlide);
      nextButton.addEventListener('click', nextSlide);
    }
  });
  </script>
  
  <style>
  .carousel {
    position: relative;
    overflow: hidden;
  }
  
  .carousel__inner {
    display: flex;
    flex-wrap: nowrap;
    transition: transform 0.5s ease;
  }
  
  .carousel__item {
    flex: 0 0 auto;
    width: 100%;
    margin-right: 10px;
  }
  
  .carousel__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: none;
    background-color: rgba(255, 255, 255, 0.8);
    color: #333;
    
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .carousel__button:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  
  .carousel__button--prev {
    left: 0;
  }
  
  .carousel__button--next {
    right: 0;
  }
  
  .carousel__icon {
    fill: currentColor;
  }
  
  .badge {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    font-weight: bold;
    font-size: 0.8rem;
    border-radius: 0.25rem;
  }
  </style>
  