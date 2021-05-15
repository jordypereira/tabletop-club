<script setup lang="ts">
import GroupsListItem from '~/components/GroupsListItem.vue'
import { groups } from '~/api/data'
</script>

<template>
  <div>
    <h1 class="text-3xl">Groups</h1>
    <ol class="flex flex-col justify-center items-center gap-10">
      <li v-for="g in groups" :key="g.id">
        <router-link :to="`/groups/${g.id}`">
          <groups-list-item :group="g" />
        </router-link>
      </li>
    </ol>
  </div>
</template>
