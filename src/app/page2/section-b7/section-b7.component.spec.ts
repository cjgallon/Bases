import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB7Component } from './section-b7.component';

describe('SectionB7Component', () => {
  let component: SectionB7Component;
  let fixture: ComponentFixture<SectionB7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
