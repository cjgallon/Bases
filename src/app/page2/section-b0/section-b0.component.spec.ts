import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB0Component } from './section-b0.component';

describe('SectionB0Component', () => {
  let component: SectionB0Component;
  let fixture: ComponentFixture<SectionB0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
