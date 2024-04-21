<script lang="ts" setup>
import QuestionCard from "@/components/QuestionCard.vue";
import {Input} from "@/components/ui/input";

import q from "@/data/quizes.json"
import {ref, watch} from "vue";

const quizes = ref(q)
const searchInput = ref("")

watch(searchInput, () => {
  quizes.value = q.filter(q => q.name.toLowerCase().includes(searchInput.value.toLowerCase()))
})
</script>

<template>
  <div class="container max-w-[1000px]">
    <header class="my-[30px] flex items-center">
      <h1 class="font-bold me-[30px] text-2xl ">Quizeez</h1>
      <Input v-model.trim="searchInput" type="text" placeholder="Search..." class="w-1/5"></Input>
    </header>
    <div class="grid grid-cols-3 gap-4">
      <QuestionCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>
