import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it(`should have the 'FrontEnd-GasBookingSystem' title`, () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FrontEnd-GasBookingSystem');
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello');
  });
});
