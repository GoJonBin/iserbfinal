import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupModalPage } from './topup-modal.page';

describe('TopupModalPage', () => {
  let component: TopupModalPage;
  let fixture: ComponentFixture<TopupModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
