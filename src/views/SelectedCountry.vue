<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useCountryStore } from '../stores/countryStore'
import type { ICountry } from '@/repositorys/countryDataRepository'
import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';


const store = useCountryStore()
const selectedCountry = ref<ICountry | null>(null)
countries.registerLocale(en);

const props = defineProps<{
  id: string
}>()

const getCountry = computed(() => {
  store.countryData?.find((country) => {
    if (props.id === country.name) {
      return (selectedCountry.value = country)
    }
  })
})

onMounted(() => {
  getCountry
})
const displayBorder = (country: string) => {
    return countries.getName(`${country}`, "en")
}
</script>

<template>
  {{ getCountry }}
  <div class="flex">
    <div class="w-6/12">
      <img :src="selectedCountry?.flags.png" />
    </div>
    <div class="w-6/12">
      <h2>{{ selectedCountry?.name }}</h2>
      <p>{{ selectedCountry?.nativeName }}</p>
      <p>{{ selectedCountry?.population }}</p>
      <p>{{ selectedCountry?.region }}</p>
      <p>{{ selectedCountry?.subregion }}</p>
      <p>{{ selectedCountry?.capital }}</p>
      <ul>
        <li v-for="(toplevel, index) in selectedCountry?.topLevelDomain" :key="index">
          <p>{{ toplevel }}</p>
        </li>
      </ul>
      <ul>
        <li v-for="(currencie, index1) in selectedCountry?.currencies" :key="index1">
          <p>{{ currencie.name }}</p>
        </li>
      </ul>
      <ul>
        <li v-for="(language, index2) in selectedCountry?.languages" :key="index2">
          {{ language.name }}
        </li>
      </ul>
      <div>
        <ul>
          <li v-for="(border, index3) in selectedCountry?.borders" :key="index3">
            <router-link :to="{name: 'country', params: {id: border}}">
                <p>e{{displayBorder(border)}}</p>
             </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
