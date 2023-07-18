import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CNotifyPage } from './cnotify.page';

const routes: Routes = [
  {
    path: '',
    component: CNotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CNotifyPageRoutingModule {}
