import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatPage } from './subcat.page';

describe('SubcatPage', () => {
  let component: SubcatPage;
  let fixture: ComponentFixture<SubcatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
