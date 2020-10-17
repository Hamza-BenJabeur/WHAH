import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRequestCompanyComponent } from './send-request-company.component';

describe('SendRequestCompanyComponent', () => {
  let component: SendRequestCompanyComponent;
  let fixture: ComponentFixture<SendRequestCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendRequestCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRequestCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
