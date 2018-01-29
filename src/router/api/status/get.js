const get = (ctx) => {
  ctx.body = 'Everything is up and running...';
  ctx.status = 200;
};

module.exports = {
  get,
};
