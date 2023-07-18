import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ANotificationPage } from './anotification.page';

const routes: Routes = [
  {
    path: '',
    component: ANotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ANotificationPageRoutingModule {}
