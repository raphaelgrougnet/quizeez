<script setup lang="ts">

import {Button} from "@/components/ui/button";
import {useRouter} from "vue-router"
const router = useRouter()
const {quizQuestionLength, nbOfCorrectAnswers} = defineProps(["quizQuestionLength", "nbOfCorrectAnswers"])
</script>

<template>
  <div class="flex justify-center items-center flex-col mt-[50px]">
    <p class="text-2xl mb-3">Votre résultat...</p>
    <h1 class="text-6xl mb-6">
      {{nbOfCorrectAnswers}}/{{quizQuestionLength}}
    </h1>
    <Button @click="router.replace('/')">
      Aller à l'accueil
    </Button>
  </div>
</template>

<style scoped>

</style>