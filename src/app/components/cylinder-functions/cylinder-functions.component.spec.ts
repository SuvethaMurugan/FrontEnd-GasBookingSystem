import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderFunctionsComponent } from './cylinder-functions.component';

describe('CylinderFunctionsComponent', () => {
  let component: CylinderFunctionsComponent;
  let fixture: ComponentFixture<CylinderFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CylinderFunctionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CylinderFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
