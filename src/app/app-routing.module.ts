import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'agent',
    loadChildren: () => import('./agent/agent.module').then( m => m.AgentPageModule)
  },
  {
    path: 'cuser',
    loadChildren: () => import('./cuser/cuser.module').then( m => m.CUserPageModule)
  },
  {
    path: 'cnotification',
    loadChildren: () => import('./cnotification/cnotification.module').then( m => m.CNotificationPageModule)
  },
  {
    path: 'cnotify',
    loadChildren: () => import('./cnotify/cnotify.module').then( m => m.CNotifyPageModule)
  },
  {
    path: 'chistory',
    loadChildren: () => import('./chistory/chistory.module').then( m => m.CHistoryPageModule)
  },
  {
    path: 'auser',
    loadChildren: () => import('./auser/auser.module').then( m => m.AUserPageModule)
  },
  {
    path: 'anotification',
    loadChildren: () => import('./anotification/anotification.module').then( m => m.ANotificationPageModule)
  },
  {
    path: 'anotify',
    loadChildren: () => import('./anotify/anotify.module').then( m => m.ANotifyPageModule)
  },
  {
    path: 'ahistory',
    loadChildren: () => import('./ahistory/ahistory.module').then( m => m.AHistoryPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard2',
    loadChildren: () => import('./dashboard2/dashboard2.module').then( m => m.Dashboard2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
