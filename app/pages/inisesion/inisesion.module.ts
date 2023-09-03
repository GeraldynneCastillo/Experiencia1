import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InisesionPageRoutingModule } from './inisesion-routing.module';

import { InisesionPage } from './inisesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InisesionPageRoutingModule
  ],
  declarations: [InisesionPage]
})
export class InisesionPageModule {}
