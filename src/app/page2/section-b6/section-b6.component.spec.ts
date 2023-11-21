import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB6Component } from './section-b6.component';

describe('SectionB6Component', () => {
  let component: SectionB6Component;
  let fixture: ComponentFixture<SectionB6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
