import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NavToolbarUserComponent } from './nav-toolbar-user.component'
import { MatMenuModule } from '@angular/material/menu'

describe('NavToolbarUserComponent', () => {
  let component: NavToolbarUserComponent
  let fixture: ComponentFixture<NavToolbarUserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavToolbarUserComponent],
      imports: [MatMenuModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavToolbarUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
