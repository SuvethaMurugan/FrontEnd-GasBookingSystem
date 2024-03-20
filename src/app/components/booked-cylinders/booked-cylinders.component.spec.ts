import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedCylindersComponent } from './booked-cylinders.component';

describe('BookedCylindersComponent', () => {
  let component: BookedCylindersComponent;
  let fixture: ComponentFixture<BookedCylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookedCylindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookedCylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
