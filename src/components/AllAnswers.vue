<script lang="ts" setup>
const emit = defineEmits<{
  (e: "optionSelected", isCorrect: boolean): void
}>()
const {currentQuestion} = defineProps(["currentQuestion"])
const optionSelected = (isCorrect : boolean) => {
  emit("optionSelected", isCorrect)
}

</script>

<template>
  <div>
    <h2 class="text-3xl my-5">{{ currentQuestion.text }}</h2>
  </div>
  <div>
    <div v-for="answer in currentQuestion.options"
         :key="currentQuestion.options.id"
         @click="optionSelected(answer.isCorrect)"
         class="flex cursor-pointer mb-[20px]  items-center text-xl">
      <p class="bg-black text-white w-[70px] h-[60px] flex items-center justify-center">{{ answer.label }}</p>
      <div
          class="border border-black h-[60px] w-[100%] flex items-center justify-start p-5 hover:bg-slate-200 transition-colors">
        <p>{{ answer.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>