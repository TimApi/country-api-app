<script setup lang="ts">
import { onMounted } from 'vue'
import CountryItem from '../components/Country/CountryItem.vue'
import { useCountryStore } from '@/stores/countryStore';


const store = useCountryStore()

onMounted(() => {
  store.getCountryData()
})
</script>

<template>
  <div class="container">   
    <ul class="flex flex-wrap">
      <CountryItem v-for="(country, index) in store.countryData" :key="index" :data="country" />
    </ul>
  </div>
</template>
