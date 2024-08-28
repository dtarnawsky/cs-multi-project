import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSpinner } from '@ionic/angular/standalone';
import { AuthenticationService } from '../authentication.service';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-auth-transition',
  templateUrl: './auth-transition.page.html',
  styleUrls: ['./auth-transition.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AuthTransitionPage {

  private authenticationService = inject(AuthenticationService);
  private routeService = inject(RouteService);
  constructor() { }

  async ionViewDidEnter() {
    try {
      if (document.location.hash == '#logout') {
        this.routeService.returnToLogin();
        return;
      }
      console.log('auth transition > login');
      await this.authenticationService.handleLogin();

    } catch (error) {
      console.error(error);
    }
  }


}
