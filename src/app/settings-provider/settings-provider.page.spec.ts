import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsProviderPage } from './settings-provider.page';

describe('SettingsProviderPage', () => {
  let component: SettingsProviderPage;
  let fixture: ComponentFixture<SettingsProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsProviderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
