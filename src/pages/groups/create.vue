<script setup lang="ts">
import FieldInput from '~/components/FieldInput.vue'
</script>

<template>
  <div>
    <carbon-campsite class="inline-block" />
    <h1>Host Session</h1>

    <form class="flex flex-col gap-4 items-center">
      <field-input name="Title"></field-input>
      <field-input name="location"></field-input>
      <field-input name="Description"></field-input>
      <button class="btn w-sm" type="submit">
        Go!!!
      </button>
    </form>
  </div>
</template>
