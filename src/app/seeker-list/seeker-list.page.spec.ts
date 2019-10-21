import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerListPage } from './seeker-list.page';

describe('SeekerListPage', () => {
  let component: SeekerListPage;
  let fixture: ComponentFixture<SeekerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
