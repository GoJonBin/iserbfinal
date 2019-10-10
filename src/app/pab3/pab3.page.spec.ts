import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pab3Page } from './pab3.page';

describe('Pab3Page', () => {
  let component: Pab3Page;
  let fixture: ComponentFixture<Pab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Pab3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
