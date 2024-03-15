import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLinkingComponent } from './bank-linking.component';

describe('BankLinkingComponent', () => {
  let component: BankLinkingComponent;
  let fixture: ComponentFixture<BankLinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankLinkingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankLinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
