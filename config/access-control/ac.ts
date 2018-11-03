const accessControl = require('accesscontrol');

let ac: any;

const init = async () => {
  if (ac) return ac;

  const permissions = [];

  ac = new accessControl(permissions);

  ac.grant('manager').extend('user');
  ac.grant('admin').extend('manager');

  return ac;
};

export { init };
export default ac;
