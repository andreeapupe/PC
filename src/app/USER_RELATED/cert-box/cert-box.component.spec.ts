import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CertBoxComponent } from './cert-box.component'

describe('CertBoxComponent', () => {
  let component: CertBoxComponent
  let fixture: ComponentFixture<CertBoxComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CertBoxComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CertBoxComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
