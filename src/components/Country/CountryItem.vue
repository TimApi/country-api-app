<script setup lang="ts">
import type { ICountry } from '@/repositorys/countryDataRepository'

const props = defineProps<{
  data: ICountry
}>()
</script>

<template>
  <li class="w-full md:w-6/12 lg:w-4/12 flex flex-wrap mb-4 md:mb-24">
    <router-link :to="{name: 'country', params: {id: data.name}}">
      <div class="flex flex-col shadow-sm cursor-pointer">
        <img :src="data.flags.png" class="h-full w-full max-h-[300px]" alt="" />
        <div class="p-4">
          <h3 class="font-bold text-xl">{{ data.name }}</h3>
          <div class="flex">
            <span class="font-semibold block mr-2">Region </span>
            <p>{{ data.region }}</p>
          </div>
          <div class="flex">
            <span class="font-semibold block mr-2">Population </span>
            <p>
              {{ data.population }}
            </p>
          </div>
          <div class="flex">
            <span class="font-semibold block mr-2">Capital:</span>
            <p>{{ data.capital }}</p>
          </div>
        </div>
      </div>
    </router-link>
  </li>
</template>
