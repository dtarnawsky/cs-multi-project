import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage {
  public busy = false;
  private authenticationService = inject(AuthenticationService);
  constructor() { }

  async signIn() {
    try {
      this.busy = true;
      await this.authenticationService.login();
      setTimeout(() => {
        // Timeout is used here because we may have logged in and are routing to the home page
        this.busy = false;
      }, 1000);
    } catch (error) {
      this.busy = false;
      console.error('signIn', error);
    }
  }

}
