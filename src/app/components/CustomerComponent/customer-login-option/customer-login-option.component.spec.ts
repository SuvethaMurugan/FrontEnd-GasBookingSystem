import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoginOptionComponent } from './customer-login-option.component';

describe('CustomerLoginOptionComponent', () => {
  let component: CustomerLoginOptionComponent;
  let fixture: ComponentFixture<CustomerLoginOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerLoginOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerLoginOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
