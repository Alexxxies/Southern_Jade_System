import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CNotifyPageRoutingModule } from './cnotify-routing.module';

import { CNotifyPage } from './cnotify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CNotifyPageRoutingModule
  ],
  declarations: [CNotifyPage]
})
export class CNotifyPageModule {}
