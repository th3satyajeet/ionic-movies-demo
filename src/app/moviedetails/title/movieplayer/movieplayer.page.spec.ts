import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieplayerPage } from './movieplayer.page';

describe('MovieplayerPage', () => {
  let component: MovieplayerPage;
  let fixture: ComponentFixture<MovieplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieplayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
