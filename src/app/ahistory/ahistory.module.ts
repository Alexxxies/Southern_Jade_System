import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AHistoryPageRoutingModule } from './ahistory-routing.module';

import { AHistoryPage } from './ahistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AHistoryPageRoutingModule
  ],
  declarations: [AHistoryPage]
})
export class AHistoryPageModule {}
