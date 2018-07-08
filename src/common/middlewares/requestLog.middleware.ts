import { logger } from '../logger';

export const requestLog = (req, res, next) => {
    const { method, url, headers } = req;
    logger.info(`${method} ${url} ${JSON.stringify(headers)}`);
    next();
};