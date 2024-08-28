import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  private authenticationService = inject(AuthenticationService);
  constructor() { }

  async open(app: string) {
    const token = await this.authenticationService.decodeToken();
    // Token will be something like:
    // {sub: '00u1n5bb0ozhADQaL0h8', name: 'CustomerSuccess Support', email: 'support@ionic.io', ver: 1, iss: 'https://dev-622807.oktapreview.com', …}
    console.log('token', token);

    // Options for passing tokens to other apps include:
    // 1. Adding it the parameters of the URL
    // 2. The app using Identity Vault and reading the token from the vault
    // 3. Storing temporarily in session storage, then the app deleting it from session storage
    location.href = `/${app}/index.html`;

  }

  logout() {
    this.authenticationService.logout();
  }
}
