import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ANotifyPageRoutingModule } from './anotify-routing.module';

import { ANotifyPage } from './anotify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ANotifyPageRoutingModule
  ],
  declarations: [ANotifyPage]
})
export class ANotifyPageModule {}
