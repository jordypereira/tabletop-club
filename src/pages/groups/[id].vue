<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { instance } from '~/api/useAxios'

import type { Group } from '~/api/data'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const item = ref<Group>()

async function fetch() {
  const resp = await instance.get<Group>(`groups/${props.id}`)
  item.value = resp.data
}

fetch()

</script>

<template>
  <div v-if="item">
    <div>
      <img v-if="item.avatar" :src="item.avatar" alt="" srcset="">
    </div>
    <h1>{{ item.title }}</h1>
    <h2>{{ item.location }}</h2>
    <p>{{ item.description }}</p>
  </div>
</template>
