import * as Config from 'config';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { middleware } from './common/middlewares/logger.middleware';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { logger } from './common/logger/logger';
import { proxyList, proxyDomain } from './proxy';
const proxy = require('http-proxy-middleware');

const appConfig: any = Config.get('app');

const bootstrap = async () => {
    const app = await NestFactory.create(ApplicationModule);
    app.use(middleware);
    app.useGlobalFilters(new HttpExceptionFilter());

    proxyList.forEach(({ uri, port }) => app.use(uri, proxy(`${proxyDomain}${port}${uri}`)));

    await app.listen(appConfig.port, () => logger.info(`Server started on http://${appConfig.host}:${appConfig.port}`));
};

bootstrap();