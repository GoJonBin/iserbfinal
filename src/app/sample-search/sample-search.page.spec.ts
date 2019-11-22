import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSearchPage } from './sample-search.page';

describe('SampleSearchPage', () => {
  let component: SampleSearchPage;
  let fixture: ComponentFixture<SampleSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
