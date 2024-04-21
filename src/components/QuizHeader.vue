<script lang="ts" setup>

import {Progress} from "@/components/ui/progress";

const {questionStatus, barPercentage} = defineProps(["questionStatus", "barPercentage"])
</script>

<template>
  <header>
    <h1 class="text-3xl mt-[30px] mb-[15px]">Question {{ questionStatus }}</h1>
    <Progress :model-value="barPercentage" class="w-1/4"></Progress>
  </header>

</template>

<style scoped>

</style>