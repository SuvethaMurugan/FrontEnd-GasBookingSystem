import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcylinderbycustomeridComponent } from './getcylinderbycustomerid.component';

describe('GetcylinderbycustomeridComponent', () => {
  let component: GetcylinderbycustomeridComponent;
  let fixture: ComponentFixture<GetcylinderbycustomeridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetcylinderbycustomeridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetcylinderbycustomeridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
