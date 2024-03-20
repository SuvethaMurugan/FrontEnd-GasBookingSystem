import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCylinderComponent } from './add-cylinder.component';

describe('AddCylinderComponent', () => {
  let component: AddCylinderComponent;
  let fixture: ComponentFixture<AddCylinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCylinderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCylinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
