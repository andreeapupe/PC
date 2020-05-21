import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DeleteModalComponent } from './delete-modal.component'
import { HttpClientModule } from '@angular/common/http'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent
  let fixture: ComponentFixture<DeleteModalComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteModalComponent],
      imports: [HttpClientModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
