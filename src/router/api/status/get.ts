import Koa from 'koa';

const get = (ctx: Koa.Context): void => {
  ctx.body = `NodeJS API starter kit is up and running in ` +
    `${process.env.NODE_ENV} environment...`;
  ctx.status = 200;
};

export {
  get
};
