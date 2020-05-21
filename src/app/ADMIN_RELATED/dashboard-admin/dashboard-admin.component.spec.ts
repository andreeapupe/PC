import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DashboardAdminComponent } from './dashboard-admin.component'
import { HttpClientModule } from '@angular/common/http'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatMenuModule } from '@angular/material/menu'

describe('DashboardAdminComponent', () => {
  let component: DashboardAdminComponent
  let fixture: ComponentFixture<DashboardAdminComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdminComponent],
      imports: [HttpClientModule, MatMenuModule],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
