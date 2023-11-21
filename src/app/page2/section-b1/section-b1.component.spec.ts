import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB1Component } from './section-b1.component';

describe('SectionB1Component', () => {
  let component: SectionB1Component;
  let fixture: ComponentFixture<SectionB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
