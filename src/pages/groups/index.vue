<script setup lang="ts">
import { ref } from '@vue/reactivity'
import GroupsListItem from '~/components/GroupsListItem.vue'
import { instance } from '~/api/useAxios'

import type { Group } from '~/api/data'

const myGroups = ref<Group[]>([])
const allGroups = ref<Group[]>([])

async function fetch() {
  const resp = await instance.get<Group[]>('me/groups')
  myGroups.value = resp.data
  const resp2 = await instance.get<Group[]>('groups')
  allGroups.value = resp2.data
}

fetch()
</script>

<template>
  <div>
    <h2>My Groups</h2>
    <ol class="flex flex-col justify-center items-center gap-10">
      <li v-for="g in myGroups" :key="g.id">
        <router-link :to="`/groups/${g.id}`">
          <groups-list-item :group="g" />
        </router-link>
      </li>
    </ol>
    <h2>Discover</h2>
    <ol class="flex flex-col justify-center items-center gap-10">
      <li v-for="g in allGroups" :key="g.id">
        <router-link :to="`/groups/${g.id}`">
          <groups-list-item :group="g" />
        </router-link>
      </li>
    </ol>
  </div>
</template>
