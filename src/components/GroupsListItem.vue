<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { Group } from '~/api/data'
import { imgUrl } from '~/api/data'

const props = defineProps({
  group: {
    type: Object as PropType<Group>,
    required: true,
  },
})

</script>

<template>
  <div class="flex justify-center gap-2">
    <div>
      <img
        width="100"
        height="100"
        :src="props.group.avatar ?? imgUrl"
        :alt="`Image of ${props.group.title}`"
        class="block rounded-full h-auto"
      />
    </div>
    <div class="flex flex-col">
      <h2>
        {{ props.group.title }}
      </h2>
      <h4>
        {{ props.group.location }}
      </h4>
      <p>{{ props.group.description }}</p>
    </div>
  </div>
</template>
