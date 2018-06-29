import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { middleware } from './common/middlewares/logger.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { logger } from './common/logger/logger';
import { configDevelop } from './config/development';
import { configProduction } from './config/production';

let config;
switch (process.env.NODE_ENV) {
case 'production':
    config = configProduction;
    break;
default:
    config = configDevelop;
}

const bootstrap = async () => {
    const app = await NestFactory.create(ApplicationModule);
    app.use(middleware);
    app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(config.port, () => logger.info(`Server started on http://${config.host}:${config.port}`));
};

bootstrap();