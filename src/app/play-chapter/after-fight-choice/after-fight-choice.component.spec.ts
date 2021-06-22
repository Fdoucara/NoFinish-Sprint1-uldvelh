import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterFightChoiceComponent } from './after-fight-choice.component';

describe('AfterFightChoiceComponent', () => {
  let component: AfterFightChoiceComponent;
  let fixture: ComponentFixture<AfterFightChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterFightChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterFightChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
