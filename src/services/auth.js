import { methods, ServiceMaker } from './index';

const { POST } = methods;

export const register = data => ServiceMaker('/v1/api/auth/signup', POST, null, data);

export const verifyOTP = data => ServiceMaker('/v1/api/auth/verifyOTP', POST, null, data);

export const login = data => ServiceMaker('/v1/api/auth/signin', POST, null, data);
