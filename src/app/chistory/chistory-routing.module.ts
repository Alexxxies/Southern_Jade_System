import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CHistoryPage } from './chistory.page';

const routes: Routes = [
  {
    path: '',
    component: CHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CHistoryPageRoutingModule {}
