import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidBar01Component } from './slid-bar01.component';

describe('SlidBar01Component', () => {
  let component: SlidBar01Component;
  let fixture: ComponentFixture<SlidBar01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidBar01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidBar01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
