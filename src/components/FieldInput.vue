
<template>
  <div class="grid grid-cols-12">
    <label :for="nameLowercase" class="col-span-4 mr-2">{{ props.name }}</label>
    <input
      v-bind="$attrs"
      :id="nameLowercase"
      :type="type"
      :value="props.modelValue"
      class="col-span-8 flex-grow text-black"
      :placeholder="nameLowercase"
      @input="e => $emit('update:modelValue', e.target.value)"
    >
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmit } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
})

defineEmit(['update:modelValue'])

const nameLowercase = computed(() => props.name.toLowerCase())
</script>
