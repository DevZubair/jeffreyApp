import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicDictionaryPage } from './pic-dictionary.page';

describe('PicDictionaryPage', () => {
  let component: PicDictionaryPage;
  let fixture: ComponentFixture<PicDictionaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicDictionaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicDictionaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
