import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRequestCenterComponent } from './send-request-center.component';

describe('SendRequestCenterComponent', () => {
  let component: SendRequestCenterComponent;
  let fixture: ComponentFixture<SendRequestCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendRequestCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRequestCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
