import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from '././api.service';

export const Approutes: Routes = [

 {
   path: '',
   redirectTo: '/login',
   pathMatch: 'full'
 },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },

  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(Approutes, {
    useHash: true,
    enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
