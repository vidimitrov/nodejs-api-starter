import Koa from 'koa';
import { omit, isEmpty } from 'lodash';
import User, { UserType } from '../../models/user/User';
import respondWith from '../../lib/respondWith';

const signup = async (ctx: Koa.Context) => {
  const attrs: UserType = (ctx.request.body as any).attrs;
  let user;

  if (isEmpty(attrs)) {
    return respondWith.badRequest(ctx);
  }

  try {
    user = await User.find(attrs);
  } catch (err) {
    return respondWith.error(ctx, err);
  }

  if (user) {
    return respondWith.forbidden(ctx, 'User already exist');
  }

  try {
    user = await User.create(attrs);
    return respondWith.success(ctx, { user: omit(user, ['password', 'provider']) });
  } catch (err) {
    return respondWith.error(ctx, err);
  }
};

export default signup;
