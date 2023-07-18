import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CNotificationPageRoutingModule } from './cnotification-routing.module';

import { CNotificationPage } from './cnotification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CNotificationPageRoutingModule
  ],
  declarations: [CNotificationPage]
})
export class CNotificationPageModule {}
