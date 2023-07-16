<script setup lang="ts">
import { ref, onMounted} from 'vue'
import type { ICountry } from '@/repositorys/countryDataRepository';
import countryDataService from '@/services/countryDataService';
import CountryItem from '../components/Country/CountryItem.vue'

const countryData = ref<ICountry[]>()

const getCountryData =  async () => {
   const response = await countryDataService.getCountryData()
   countryData.value = response.data
}

onMounted(() => {
    getCountryData()
})

</script>

<template>
    <div class="container">
        <h2 class="text-red">test</h2>
    </div>
    <CountryItem v-for="(country, index) in countryData" :key="index" :data="country" />
</template>