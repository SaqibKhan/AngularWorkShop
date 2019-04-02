import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidBar02Component } from './slid-bar02.component';

describe('SlidBar02Component', () => {
  let component: SlidBar02Component;
  let fixture: ComponentFixture<SlidBar02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidBar02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidBar02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
