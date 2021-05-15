<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const nameLowercase = computed(() => props.name.toLowerCase())
</script>
<template>
  <div>
    <label :for="nameLowercase" class="mr-2">{{ props.name }}</label>
    <input :id="nameLowercase" type="text" :placeholder="nameLowercase">
  </div>
</template>
