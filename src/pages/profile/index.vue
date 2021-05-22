<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { profile } from '~/api/data'

const isOpenGames = ref(false)
const isOpenGenres = ref(false)

function setIsOpenGames(value: boolean) {
  isOpenGames.value = value
}

function setIsOpenGenres(value: boolean) {
  isOpenGenres.value = value
}
</script>

<template>
  <div>
    <h1>
      Profile
    </h1>
    <div class="flex flex-col items-center gap-4">
      <div>
        <img width="200" :src="profile.avatar" alt="Profile picture" srcset="" class="rounded-full">
      </div>
      <h2>{{ profile.name }}</h2>
      <h4>{{ profile.location }}</h4>
      <p>{{ profile.description }}</p>
    </div>
    <div class="mt-5 flex gap-2 justify-center italic text-gray-400">
      <button class="btn" @click="setIsOpenGames(true)">
        Games (5)
      </button>
      <games-dialog :open="isOpenGames" @close="setIsOpenGames(false)" />
      <button class="btn" @click="setIsOpenGenres(true)">
        Genres (3)
      </button>
    </div>
  </div>
</template>
