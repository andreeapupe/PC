import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCertificationsComponent } from './all-certifications.component';

describe('AllCertificationsComponent', () => {
  let component: AllCertificationsComponent;
  let fixture: ComponentFixture<AllCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
