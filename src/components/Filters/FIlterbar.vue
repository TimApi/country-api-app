<script setup lang="ts">
import { computed, ref } from 'vue'

const IRegion = {
  Africa: 'Africa',
  America: 'Americas',
  Asia: 'Asia',
  Europe: 'Europe',
  Oceania: 'Oceania'
} as const

const selectedRegionData = ref('')

const emit = defineEmits<{
    (e: 'selectedRegion', selectedRegion: string): void
}>()

const regions = computed(() => {
  return [
    {
      placeholder: IRegion.Africa,
      value: IRegion.Africa
    },
    { placeholder: IRegion.America, value: IRegion.America },
    { placeholder: IRegion.Asia, value: IRegion.Asia },
    { placeholder: IRegion.Europe, value: IRegion.Europe },
    { placeholder: IRegion.Oceania, value: IRegion.Oceania }
  ]
})

const emitSelectedRegion = (value: string) => {
    emit('selectedRegion', value)
}
</script>

<template>
  <select  name="regions" @change="emitSelectedRegion(selectedRegionData)" v-model="selectedRegionData">
    <option value="">Filter by region</option>
    <option :value="region.value" v-for="(region, index) in regions" :key="index">{{ region.placeholder }}</option>
  </select>
</template>
