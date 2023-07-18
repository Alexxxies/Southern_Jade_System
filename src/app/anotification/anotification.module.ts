import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ANotificationPageRoutingModule } from './anotification-routing.module';

import { ANotificationPage } from './anotification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ANotificationPageRoutingModule
  ],
  declarations: [ANotificationPage]
})
export class ANotificationPageModule {}
