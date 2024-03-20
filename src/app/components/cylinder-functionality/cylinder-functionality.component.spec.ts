import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderFunctionalityComponent } from './cylinder-functionality.component';

describe('CylinderFunctionalityComponent', () => {
  let component: CylinderFunctionalityComponent;
  let fixture: ComponentFixture<CylinderFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CylinderFunctionalityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CylinderFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
