import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AUserPageRoutingModule } from './auser-routing.module';

import { AUserPage } from './auser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AUserPageRoutingModule
  ],
  declarations: [AUserPage]
})
export class AUserPageModule {}
