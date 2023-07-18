import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CHistoryPageRoutingModule } from './chistory-routing.module';

import { CHistoryPage } from './chistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CHistoryPageRoutingModule
  ],
  declarations: [CHistoryPage]
})
export class CHistoryPageModule {}
