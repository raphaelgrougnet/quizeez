<script setup lang="ts">
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {useRouter} from "vue-router";

const router = useRouter()
const {quiz} = defineProps(["quiz"])
const navigateToRoute = () => router.push(`/quiz/${quiz.id}`)
</script>

<template>
  <Card class="shadow-lg cursor-pointer" @click="navigateToRoute">
    <img class="rounded-t h-2/3 w-[100%]" :src="quiz.img" :alt="quiz.name.toLowerCase()">
    <CardHeader>
      <CardTitle>{{quiz.name}}</CardTitle>
      <CardDescription>{{quiz.questions.length}} questions</CardDescription>
    </CardHeader>
  </Card>
</template>

<style scoped>

</style>