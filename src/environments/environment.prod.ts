export const environment = {
  production: true,
  endpoint: {
    // auth: '/auth-service/v1/login',
    // logout: '/auth-service/v1/logout',
    // register: '/auth-service/v1/register',
    auth: 'http://localhost:8882/auth-service/v1/login',
    logout: 'http://localhost:8882/auth-service/v1/logout',
    register: 'http://localhost:8882/auth-service/v1/register',
    groups: 'http://localhost:8882/auth-service/v1/groups',
  }
};
