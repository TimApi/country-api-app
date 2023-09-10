<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ICountry } from '@/repositorys/countryDataRepository';
import CountryItem from '../components/Country/CountryItem.vue'
import Searchinput from './Filters/Searchinput.vue';
import { useCountryStore } from '@/stores/countryStore';

const store = useCountryStore()

const modifiedCountryArray = ref<[] | ICountry[] | undefined>([])
const setSelectedCountry = (testing: ICountry[] | undefined) => {
  modifiedCountryArray.value =  testing
}


onMounted(async ()  => {
  await store.getCountryData()
   modifiedCountryArray.value = store.countryData
})
</script>

<template>
  <div class="container"> 
    <Searchinput  @selectedcountry="setSelectedCountry"/> 
    <ul class="flex flex-wrap">
      <CountryItem v-for="(country, index) in modifiedCountryArray" :key="index" :data="country" />
    </ul>
  </div>
</template>
