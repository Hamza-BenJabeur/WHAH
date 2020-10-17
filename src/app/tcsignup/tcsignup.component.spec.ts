import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcsignupComponent } from './tcsignup.component';

describe('TcsignupComponent', () => {
  let component: TcsignupComponent;
  let fixture: ComponentFixture<TcsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
