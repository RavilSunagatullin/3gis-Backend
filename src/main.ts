import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

async function StartApp() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: 'http://localhost:3001',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  })
  await app.listen(3000)
}
StartApp()
