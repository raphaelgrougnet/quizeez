<script lang="ts" setup>

import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import quizes_ from "@/data/quizes.json"
import type {Quiz} from "@/types/types";
import AllAnswers from "@/components/AllAnswers.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import Result from "@/components/Result.vue";

const route = useRoute()

const quizId = parseInt(<string>route.params.id)
const allQuizes: Quiz[] = quizes_ as Quiz[];
const quiz: Quiz | undefined = allQuizes.find(q => q.id === quizId) as Quiz

const currentQuestionIndex = ref(0)
const showResults = ref(false)

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz?.questions.length}`)
const barPercentage = computed(() => currentQuestionIndex.value / quiz?.questions.length * 100)

const nbOfCorrectAnswers = ref(0)

const onOptionSelected = (isCorrect: any) => {
  if (isCorrect) {
    nbOfCorrectAnswers.value++
  }
  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true
  }

  currentQuestionIndex.value++
}
</script>

<template>
  <div class="container max-w-[1000px]">
    <QuizHeader :barPercentage="barPercentage" :currentQuestion="currentQuestionIndex" :questionStatus="questionStatus"
                :quiz="quiz"/>
    <Transition name="fade">
      <AllAnswers v-if="!showResults" :currentQuestion="quiz.questions[currentQuestionIndex]"
                  @optionSelected="onOptionSelected"/>

      <Result v-else
              :nbOfCorrectAnswers="nbOfCorrectAnswers"
              :quizQuestionLength="quiz.questions.length"/>
    </Transition>
  </div>

</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>