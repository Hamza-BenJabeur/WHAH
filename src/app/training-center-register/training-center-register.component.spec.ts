import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCenterRegisterComponent } from './training-center-register.component';

describe('TrainingCenterRegisterComponent', () => {
  let component: TrainingCenterRegisterComponent;
  let fixture: ComponentFixture<TrainingCenterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCenterRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCenterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
