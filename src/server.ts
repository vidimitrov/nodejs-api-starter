import http from 'http';
import Koa from 'koa';
import helmet from 'koa-helmet';
import config from '../config';
import router from './router';
import * as logger from 'winston';

const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(helmet());

const server = http.createServer(app.callback());

server.listen(config.server.port,
  () => logger.info(`App is listening on port ${config.server.port}`));

export default server;
