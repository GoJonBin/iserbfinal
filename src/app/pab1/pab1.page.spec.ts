import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pab1Page } from './pab1.page';

describe('Pab1Page', () => {
  let component: Pab1Page;
  let fixture: ComponentFixture<Pab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Pab1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
