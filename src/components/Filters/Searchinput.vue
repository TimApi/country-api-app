<script setup lang="ts">
import Filterbar from './Filterbar.vue';
import type { ICountry } from '@/repositorys/countryDataRepository';
import { useCountryStore } from '@/stores/countryStore';
import { computed, ref, watch } from 'vue';

const store = useCountryStore()
const inputValue = ref('')
const selectedRegion = ref('')

const emit = defineEmits<{
    (e: 'selectedcountry', selectedCountryArray: ICountry[] | undefined): void,
}>()


const filterdBasedOnInput = computed(() => {
    return store.countryData?.filter((country => {
        return country.name.toLocaleLowerCase().includes(inputValue.value.toLocaleLowerCase())
    }))
})

const filterByRegion = computed(() => {
    return store.countryData?.filter((country => {
        console.log(country.region)
        return country.region.includes(selectedRegion.value)
    }))
})

const emitModifiedCountryAraay = () => {
    emit('selectedcountry', filterdBasedOnInput.value)
}

const emitSelectedRegion = () => {
    emit('selectedcountry', filterByRegion.value)
}

const setRegion = (region: string) => {
    selectedRegion.value = region
}

watch(
  () => selectedRegion.value,
  () => {
        emitSelectedRegion()
  }
)


</script>

<template>
    <form @submit.prevent="emitModifiedCountryAraay" class="container">
        <input v-model="inputValue" type="text" class="py-2 px-4 border border-solid border-black rounded mr-2" placeholder="vul hier een land in" />
        <Filterbar @selected-region="setRegion" />
    </form>
</template>
