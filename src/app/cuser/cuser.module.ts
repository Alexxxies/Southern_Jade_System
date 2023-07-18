import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CUserPageRoutingModule } from './cuser-routing.module';

import { CUserPage } from './cuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CUserPageRoutingModule
  ],
  declarations: [CUserPage]
})
export class CUserPageModule {}
