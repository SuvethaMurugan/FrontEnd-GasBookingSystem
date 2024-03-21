import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentUserComponent } from './login-username.component';

describe('LoginComponentComponent', () => {
  let component: LoginComponentUserComponent;
  let fixture: ComponentFixture<LoginComponentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponentUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
