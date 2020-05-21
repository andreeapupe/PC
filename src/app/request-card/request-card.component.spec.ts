import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RequestCardComponent } from './request-card.component'
import { HttpClientModule } from '@angular/common/http'
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { Ng2SearchPipeModule } from 'ng2-search-filter'

describe('RequestCardComponent', () => {
  let component: RequestCardComponent
  let fixture: ComponentFixture<RequestCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestCardComponent],
      imports: [HttpClientModule, Ng2SearchPipeModule],
      providers: [
        MatDialog,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
