<template>
  <nav class="list-nav flex items-center justify-around text-white bg-gray-800 py-4">
    <router-link to="/viviendas" class="hover:text-gray-300">Viviendas</router-link>
    <router-link to="/contacto" class="hover:text-gray-300">Contacto</router-link>
    <router-link to="/preguntas" class="hover:text-gray-300">Preguntas</router-link>
  </nav>
</template>


<script>
    import { RouterLink } from 'vue-router'

    export default {
        name: 'ListadoPaginas',
        components: {
            RouterLink,
        },
    };
</script>

<style scoped>
    img {
        width: 100%;
        max-width: 200px;
    }

    .list-nav {
        width: 100vh;
        font-size: 1.2em;
    }
</style>
