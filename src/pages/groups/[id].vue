<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { Group } from '~/api/data'
import { groups } from '~/api/data'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const item = computed<Group>(() => groups.find(({ id }) => String(id) === props.id))

</script>

<template>
  <div>
    <div>
      <img :src="item.avatar" alt="" srcset="">
    </div>
    <h1>{{ item.title }}</h1>
    <h2>{{ item.location }}</h2>
    <p>{{ item.description }}</p>
  </div>
</template>
