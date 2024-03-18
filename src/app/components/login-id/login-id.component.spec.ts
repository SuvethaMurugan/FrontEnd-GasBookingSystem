import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIdComponent } from './login-id.component';

describe('LoginIdComponent', () => {
  let component: LoginIdComponent;
  let fixture: ComponentFixture<LoginIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
