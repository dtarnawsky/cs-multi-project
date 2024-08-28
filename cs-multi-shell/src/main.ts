import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { AuthGuardService } from './app/auth-guard.service';
import { APP_INITIALIZER } from '@angular/core';
import { VaultService } from './app/vault.service';

const appInitFactory =
  (vaultService: VaultService): (() => Promise<void>) =>
    async () => {
      await vaultService.init();
    }

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: APP_INITIALIZER, useFactory: appInitFactory, deps: [VaultService], multi: true },
    { provide: AuthGuardService, useClass: AuthGuardService },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
