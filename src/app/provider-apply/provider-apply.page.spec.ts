import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderApplyPage } from './provider-apply.page';

describe('ProviderApplyPage', () => {
  let component: ProviderApplyPage;
  let fixture: ComponentFixture<ProviderApplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderApplyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderApplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
