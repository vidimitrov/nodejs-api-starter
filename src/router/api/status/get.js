const get = (ctx) => {
  ctx.body = `NodeJS API starter kit is up and running in ` +
    `${process.env.NODE_ENV} environment...`;
  ctx.status = 200;
};

module.exports = {
  get,
};
