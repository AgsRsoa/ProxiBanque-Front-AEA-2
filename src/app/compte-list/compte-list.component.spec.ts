import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListComponent } from './compte-list.component';

describe('CompteListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
