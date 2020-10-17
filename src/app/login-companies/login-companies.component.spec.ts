import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCompaniesComponent } from './login-companies.component';

describe('LoginCompaniesComponent', () => {
  let component: LoginCompaniesComponent;
  let fixture: ComponentFixture<LoginCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
