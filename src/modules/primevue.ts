import PrimeVue from 'primevue/config'
import { UserModule } from '~/types'

/** @see https://pinia.esm.dev/ */
export const install: UserModule = ({ isClient, app }) => {
  if (!isClient)
    return

  app.use(PrimeVue)
}
