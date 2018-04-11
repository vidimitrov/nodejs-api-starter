import Router from 'koa-router';
import api from './api';

const router = new Router();

// Endpoints
router.get('/', api.status.get);

export default router;
