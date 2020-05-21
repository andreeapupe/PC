import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule, RoutingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

//Importate
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule } from '@angular/material/select'
import { MatMenuModule } from '@angular/material/menu'
import { ReactiveFormsModule } from '@angular/forms'
import { MatDividerModule } from '@angular/material/divider'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSidenavModule } from '@angular/material/sidenav'

import 'hammerjs'
import { CertBoxComponent } from './USER_RELATED/cert-box/cert-box.component'
import { HttpClientModule } from '@angular/common/http'
import { RequestCardComponent } from './request-card/request-card.component'
import { AddRequestComponent } from './USER_RELATED/add-request/add-request.component'
import { NavToolbarComponent } from './ADMIN_RELATED/nav-toolbar/nav-toolbar.component'
import { NavToolbarUserComponent } from './USER_RELATED/nav-toolbar-user/nav-toolbar-user.component'
import { DeleteModalComponent } from './USER_RELATED/delete-modal/delete-modal.component'
import { FilterModalComponent } from './ADMIN_RELATED/filter-modal/filter-modal.component'
import { ChangeStatusModalComponent } from './ADMIN_RELATED/change-status-modal/change-status-modal.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter'

@NgModule({
  declarations: [
    AppComponent,
    CertBoxComponent,
    RequestCardComponent,
    AddRequestComponent,
    NavToolbarComponent,
    RoutingComponents,
    NavToolbarUserComponent,
    DeleteModalComponent,
    FilterModalComponent,
    ChangeStatusModalComponent,
  ],
  entryComponents: [AddRequestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSidenavModule,
    Ng2SearchPipeModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
