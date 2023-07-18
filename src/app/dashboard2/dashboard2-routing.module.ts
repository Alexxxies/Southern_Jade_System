import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AHistoryPageModule } from '../ahistory/ahistory.module';
import { ANotificationPageModule } from '../anotification/anotification.module';
import { ANotifyPageModule } from '../anotify/anotify.module';
import { AUserPageModule } from '../auser/auser.module';

import { Dashboard2Page } from './dashboard2.page';

const routes: Routes = [
  {
    path: '',
    component: Dashboard2Page,
    children:[
      {

      path: 'anotification',
      loadChildren: () => import('../anotification/anotification.module').then (m => ANotificationPageModule)

    },{
      path: 'anotify',
      loadChildren: () => import('../anotify/anotify.module').then (m => ANotifyPageModule)

    },{
      path: 'ahistory',
      loadChildren: () => import('../ahistory/ahistory.module').then (m => AHistoryPageModule)
    },{
      path: 'auser',
      loadChildren: () => import('../auser/auser.module').then (m => AUserPageModule)
    },
    {
      path: '',
      redirectTo: '/dashboard2/anotification',
      pathMatch: 'full'
    }
    ]
  },{

    path:'',
    redirectTo: '/dashboard2/anotification',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dashboard2PageRoutingModule {}
