import { ProviderOptions } from '@ionic-enterprise/auth';

export const environment = {
  production: true
};

export const urlSchemeIonicAuthOptions: ProviderOptions = {
  audience: '',

  // client or application id for provider
  clientId: '0oaur4c907I5uMr4I0h7',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://dev-622807.oktapreview.com/.well-known/openid-configuration',
  // the URI to redirect to after log in
  redirectUri: 'ionic.cs.multiauth://auth-transition',
  // requested scopes from provider
  scope: 'openid email profile offline_access',
  // the URL to redirect to after log out
  logoutUrl: 'ionic.cs.multiauth://logging-out',
};

export const webIonicAuthOptions: ProviderOptions = {
  audience: 'https://audience.my-app.com',

  // client or application id for provider
  clientId: '0oaur4c907I5uMr4I0h7',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://dev-622807.oktapreview.com/.well-known/openid-configuration',
  // the URI to redirect to after log in
  redirectUri: 'http://localhost:8100/auth-transition',
  // requested scopes from provider
  scope: 'openid email profile offline_access',
  // the URL to redirect to after log out
  logoutUrl: 'http://localhost:8100/auth-transition#logout'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
