import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB2Component } from './section-b2.component';

describe('SectionB2Component', () => {
  let component: SectionB2Component;
  let fixture: ComponentFixture<SectionB2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
