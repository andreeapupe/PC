import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FilterModalComponent } from './filter-modal.component'
import { HttpClientModule } from '@angular/common/http'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

describe('FilterModalComponent', () => {
  let component: FilterModalComponent
  let fixture: ComponentFixture<FilterModalComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterModalComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterModalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
