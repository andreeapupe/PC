import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule, RoutingComponents } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'

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

import 'hammerjs'
import { CertBoxComponent } from './cert-box/cert-box.component'
import { HttpClientModule } from '@angular/common/http'
import { RequestCardComponent } from './request-card/request-card.component'
import { AddRequestComponent } from './add-request/add-request.component'
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component'

@NgModule({
  declarations: [
    AppComponent,
    CertBoxComponent,
    RequestCardComponent,
    AddRequestComponent,
    NavToolbarComponent,
    RoutingComponents,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
