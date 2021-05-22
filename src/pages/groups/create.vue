<template>
  <div>
    <h1 class="mb-4">
      Host Session
    </h1>

    <form @submit.prevent="createGroup">
      <div class="flex flex-col gap-4">
        <label for="online">
          <input id="online" v-model="formData.online" type="checkbox" name="online">
          <span class="ml-2">Online Event</span>
        </label>
        <InputText v-model="formData.title" type="text" />
        <InputText v-model="formData.location.title" type="text" />
        <InputText v-model="formData.information" type="text" />
        <InputNumber v-model="formData.start_time" />

        <div>
          <h3>Games</h3>
          <AutoComplete
            v-model="searchGameTerm"
            class="dark:text-gray-800"
            :suggestions="searchedGames"
            field="title"
            @item-select="addGame"
            @complete="searchGame($event)"
          />
        </div>
      </div>
      <ul>
        <li v-for="g in formData.games" :key="g.id">
          {{ g.title }}
        </li>
      </ul>

      <button class="btn mt-4" type="submit">
        Create
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import AutoComplete from 'primevue/autocomplete'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'

import { searchGames, instance } from '~/api/useAxios'

import type { Game } from '~/types/game'
import type { Group } from '~/types/group'

const initialData: Group = {
  title: 'Group #1',
  location: {
    title: 'Plaza del fiore',
    public: true,
  },
  information: 'Letz plei sum gaemz',
  online: false,
  start_time: undefined,
}

const formData = ref<Group>(initialData)
const formDataErrors = ref(null)

const searchedGames = ref<Game[]>([])
const searchGameTerm = ref('')

function createGroup() {
  try {
    instance.post('groups', formData.value)
  }
  catch (error) {
    formDataErrors.value = error.errors ?? null
    console.log('🚀 ~ file: create.vue ~ line 73 ~ createGroup ~ error', error)
  }
}

function addGame(e: {originalEvent: Event; value: any}) {
  // @ts-ignore
  formData.value.games.push(e.value)
  searchGameTerm.value = ''
}

async function searchGame(event: any) {
  const resp = await searchGames(event.query)
  searchedGames.value = resp.filter(({ id }) => !formData.value.games?.some(g => g.id === id))
}
</script>

<style>
  auto-complete [aria-selected="true"],
  auto-complete [role="option"]:hover {
    background-color: lavender;
  }
  auto-complete [aria-disabled="true"] {
    color: grey;
  }
</style>
