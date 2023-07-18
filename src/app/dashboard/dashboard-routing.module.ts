import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { CNotificationPage } from '../cnotification/cnotification.page';
import { CNotificationPageModule } from '../cnotification/cnotification.module';
import { CUserPageModule } from '../cuser/cuser.module';
import { CNotifyPageModule } from '../cnotify/cnotify.module';
import { CHistoryPageModule } from '../chistory/chistory.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:[
      {

      path: 'cnotification',
      loadChildren: () => import('../cnotification/cnotification.module').then (m => CNotificationPageModule)

    },{
      path: 'cnotify',
      loadChildren: () => import('../cnotify/cnotify.module').then (m => CNotifyPageModule)

    },{
      path: 'chistory',
      loadChildren: () => import('../chistory/chistory.module').then (m => CHistoryPageModule)
    },{
      path: 'cuser',
      loadChildren: () => import('../cuser/cuser.module').then (m => CUserPageModule)
    },
    {
      path: '',
      redirectTo: '/dashboard/cnotification',
      pathMatch: 'full'
    }
    ]
  },{

    path:'',
    redirectTo: '/dashboard/cnotification',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
