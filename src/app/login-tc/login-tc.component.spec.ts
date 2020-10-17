import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTcComponent } from './login-tc.component';

describe('LoginTcComponent', () => {
  let component: LoginTcComponent;
  let fixture: ComponentFixture<LoginTcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
