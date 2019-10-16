import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDriverPage } from './provider-driver.page';

describe('ProviderDriverPage', () => {
  let component: ProviderDriverPage;
  let fixture: ComponentFixture<ProviderDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderDriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
