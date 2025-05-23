import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.info(`HTTP Server running on ${env.PORT}`)
    return
  })
  .catch((error) => {
    console.error(error)
  })
