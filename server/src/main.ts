import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');

    app.listen(PORT, () => {
      console.log(`Server is started on ${PORT} port`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
