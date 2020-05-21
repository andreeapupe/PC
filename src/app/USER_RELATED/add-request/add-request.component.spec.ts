import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AddRequestComponent } from './add-request.component'
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormBuilder } from '@angular/forms'

describe('AddRequestComponent', () => {
  let component: AddRequestComponent
  let fixture: ComponentFixture<AddRequestComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddRequestComponent],
      imports: [HttpClientModule, MatDialogModule],
      providers: [FormBuilder, { provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRequestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
