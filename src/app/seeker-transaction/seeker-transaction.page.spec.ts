import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerTransactionPage } from './seeker-transaction.page';

describe('SeekerTransactionPage', () => {
  let component: SeekerTransactionPage;
  let fixture: ComponentFixture<SeekerTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerTransactionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
