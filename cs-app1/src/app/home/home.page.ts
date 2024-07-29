import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/angular/standalone';
import { ConnectionStatus, Network } from '@capacitor/network';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  status: ConnectionStatus = { connected: false, connectionType: 'unknown' };
  constructor() { }

  async ngOnInit() {
    Network.addListener('networkStatusChange', status => {
      this.status = status;
    });
    this.status = await Network.getStatus();
  }

  close() {
    location.href = '../index.html';
  }
}
