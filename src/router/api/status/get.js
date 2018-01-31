const get = (ctx) => {
  ctx.body = 'NodeJS API Starter kit is up and running...';
  ctx.status = 200;
};

module.exports = {
  get,
};
