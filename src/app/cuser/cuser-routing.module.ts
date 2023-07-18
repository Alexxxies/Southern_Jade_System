import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CUserPage } from './cuser.page';

const routes: Routes = [
  {
    path: '',
    component: CUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CUserPageRoutingModule {}
