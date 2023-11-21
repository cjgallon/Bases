import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionB8Component } from './section-b8.component';

describe('SectionB8Component', () => {
  let component: SectionB8Component;
  let fixture: ComponentFixture<SectionB8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionB8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionB8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
