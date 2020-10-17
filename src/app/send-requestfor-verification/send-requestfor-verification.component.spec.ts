import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRequestforVerificationComponent } from './send-requestfor-verification.component';

describe('SendRequestforVerificationComponent', () => {
  let component: SendRequestforVerificationComponent;
  let fixture: ComponentFixture<SendRequestforVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendRequestforVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRequestforVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
