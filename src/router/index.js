const Router = require('koa-router');
const api = require('./api');

const router = new Router();

// Endpoints
router.get('/', api.status.get);

module.exports = router;
