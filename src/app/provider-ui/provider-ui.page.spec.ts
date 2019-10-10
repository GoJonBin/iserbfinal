import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderUIPage } from './provider-ui.page';

describe('ProviderUIPage', () => {
  let component: ProviderUIPage;
  let fixture: ComponentFixture<ProviderUIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderUIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderUIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
