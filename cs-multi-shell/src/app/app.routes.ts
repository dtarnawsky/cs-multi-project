import { Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'auth-transition',
    loadComponent: () => import('./auth-transition/auth-transition.page').then( m => m.AuthTransitionPage)
  },
];
