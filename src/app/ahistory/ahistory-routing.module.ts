import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AHistoryPage } from './ahistory.page';

const routes: Routes = [
  {
    path: '',
    component: AHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AHistoryPageRoutingModule {}
