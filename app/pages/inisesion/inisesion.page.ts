import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inisesion',
  templateUrl: './inisesion.page.html',
  styleUrls: ['./inisesion.page.scss'],
})
export class InisesionPage implements OnInit {
  usuario = {
    user: '',
    password: ''
  }

  constructor(private alertController: AlertController , private navController: NavController) { }

  ngOnInit() {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesión',
      message: 'Tu cuenta ha sido iniciada con éxito.',
      buttons: ['OK']
    });
    await alert.present();
  }
  Enviar() {
    this.mostrarAlerta(); 
    this.navController.navigateForward('/inicio');
    this.usuario.user = '';
    this.usuario.password = '';
  }
}