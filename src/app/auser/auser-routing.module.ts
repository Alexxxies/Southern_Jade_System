import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AUserPage } from './auser.page';

const routes: Routes = [
  {
    path: '',
    component: AUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AUserPageRoutingModule {}
