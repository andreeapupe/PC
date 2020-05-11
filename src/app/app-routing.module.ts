import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DashboardUserComponent } from './USER_RELATED/dashboard-user/dashboard-user.component'
import { DashboardAdminComponent } from './ADMIN_RELATED/dashboard-admin/dashboard-admin.component'
import { AuthenticationComponent } from './LOGIN-SIGNUP/authentication/authentication.component'
import { AllCertificationsComponent } from './USER_RELATED/all-certifications/all-certifications.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/authenticate',
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
    path: 'authenticate',
    component: AuthenticationComponent,
  },
  {
    path: 'all-certifications',
    component: AllCertificationsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponents = [
  DashboardUserComponent,
  DashboardAdminComponent,
  AuthenticationComponent,
  AllCertificationsComponent,
]
