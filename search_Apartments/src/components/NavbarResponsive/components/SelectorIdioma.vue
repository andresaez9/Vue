<template>
    <nav class="flex gap-4">
      <span @click="changeLanguage('es')" :class="{ 'font-bold': language === 'es' }" class="cursor-pointer">ES</span>
      <span @click="changeLanguage('en')" :class="{ 'font-bold': language === 'en' }" class="cursor-pointer">EN</span>
    </nav>
  </template>
  

<script>
    export default {
        name: 'SelectorIdioma',
        data() {
            return {
                language: 'es',
            };
        },
        methods: {
            changeLanguage(lang) {
                this.language = lang;
            },
        },
    };
</script>

<style scoped>
    span {
        cursor: pointer;
    }
</style>