import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWebPage } from './chat-web.page';

describe('ChatWebPage', () => {
  let component: ChatWebPage;
  let fixture: ComponentFixture<ChatWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWebPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
