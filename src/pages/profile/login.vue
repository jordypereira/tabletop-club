<template>
  <section>
    <h1 class="mb-4">
      Login
    </h1>
    <form @submit.prevent="login">
      <field-input v-model="formData.username" name="username"></field-input>
      <field-input v-model="formData.password" type="password" name="password"></field-input>
      <button class="btn mt-4" type="submit">
        <span class="flex items-center">
          Login <carbon-login class="ml-1" />
        </span>
      </button>
    </form>
    <p>{{ error }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { postLogin } from '~/api/useAxios'
const router = useRouter()

const initialData = {
  username: 'test2@test.be',
  password: 'test123',
}
const formData = ref(initialData)
const error = ref('empty')
async function login() {
  try {
    await postLogin(formData.value)
    router.push('/')
  }
  catch (error) {
    error.value = error
    console.log('🚀 ~ file: login.vue ~ line 20 ~ login ~ error', error)
  }
}
</script>
