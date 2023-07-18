import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CNotificationPage } from './cnotification.page';

const routes: Routes = [
  {
    path: '',
    component: CNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CNotificationPageRoutingModule {}
