import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardUserComponent } from './USER_RELATED/dashboard-user/dashboard-user.component'
import { DashboardAdminComponent } from './ADMIN_RELATED/dashboard-admin/dashboard-admin.component'
import { AllCertificationsComponent } from './USER_RELATED/all-certifications/all-certifications.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/all-certifications',
    pathMatch: 'full',
  },
  {
    path: 'dashboard-user',
    component: DashboardUserComponent,
  },
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent,
  },
  {
    path: 'all-certifications',
    component: AllCertificationsComponent,
  },
  { path: '**', component: AllCertificationsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponents = [
  DashboardUserComponent,
  DashboardAdminComponent,
  AllCertificationsComponent,
]
