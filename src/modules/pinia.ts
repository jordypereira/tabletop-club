import { createPinia } from 'pinia'
import { UserModule } from '~/types'

/** @see https://pinia.esm.dev/ */
export const install: UserModule = ({ isClient, app }) => {
  if (!isClient)
    return

  app.use(createPinia())
}
