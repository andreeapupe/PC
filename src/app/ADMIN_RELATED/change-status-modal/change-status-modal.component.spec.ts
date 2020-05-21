import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ChangeStatusModalComponent } from './change-status-modal.component'
import { HttpClientModule } from '@angular/common/http'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

describe('ChangeStatusModalComponent', () => {
  let component: ChangeStatusModalComponent
  let fixture: ComponentFixture<ChangeStatusModalComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeStatusModalComponent],
      imports: [HttpClientModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStatusModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
