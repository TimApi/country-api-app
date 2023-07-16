<script setup lang="ts">
import type { ICountry } from '@/repositorys/countryDataRepository';


const props = defineProps<{
  data: ICountry
}>()
</script>

<template>
  <section>
    <ul >
      <li v-for="(country, index) in data" :key="index">
        <a>
          
        </a>
      </li>
    </ul>
  </section>
</template>
