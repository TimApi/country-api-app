import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ICountry } from '@/repositorys/countryDataRepository'
import countryDataService from '@/services/countryDataService'

export const useCountryStore = defineStore('countryStore', () => {

  const countryData = ref<ICountry[]>()

  const getCountryData = async () => {
    const response = await countryDataService.getCountryData()
    countryData.value = response.data
  }

  

  return { countryData, getCountryData }
})
