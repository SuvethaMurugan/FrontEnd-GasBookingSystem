import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCylindersComponent } from './all-cylinders.component';

describe('AllCylindersComponent', () => {
  let component: AllCylindersComponent;
  let fixture: ComponentFixture<AllCylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCylindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
