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

  open(app: string) {
    location.href = `/${app}/index.html`;
  }

  logout() {
    this.authenticationService.logout();
  }
}
