import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Department')
    .setDescription('Endpoints For Department')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/departments/api', app, document);

  await app.listen(3000);
}
bootstrap();
