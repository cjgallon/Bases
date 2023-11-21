import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB3Component } from './section-b3.component';

describe('SectionB3Component', () => {
  let component: SectionB3Component;
  let fixture: ComponentFixture<SectionB3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
