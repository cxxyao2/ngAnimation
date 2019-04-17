import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInOutXComponent } from './fade-in-out-x.component';

describe('FadeInOutXComponent', () => {
  let component: FadeInOutXComponent;
  let fixture: ComponentFixture<FadeInOutXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeInOutXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeInOutXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
