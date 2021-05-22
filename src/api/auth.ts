import { useRouter } from 'vue-router'
// import { useUserStore } from '~/store/useUserStore'
const router = useRouter()
// const userStore = useUserStore()

router.beforeResolve((to, from, next) => {
  if (to.meta.auth) next('profile/login')
  else next()
})
