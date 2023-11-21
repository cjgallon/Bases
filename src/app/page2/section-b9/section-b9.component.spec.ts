import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB9Component } from './section-b9.component';

describe('SectionB9Component', () => {
  let component: SectionB9Component;
  let fixture: ComponentFixture<SectionB9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
