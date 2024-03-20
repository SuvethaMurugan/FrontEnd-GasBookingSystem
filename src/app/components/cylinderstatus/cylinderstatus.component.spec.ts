import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderstatusComponent } from './cylinderstatus.component';

describe('CylinderstatusComponent', () => {
  let component: CylinderstatusComponent;
  let fixture: ComponentFixture<CylinderstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CylinderstatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CylinderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
