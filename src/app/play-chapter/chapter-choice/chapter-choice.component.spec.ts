import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterChoiceComponent } from './chapter-choice.component';

describe('ChapterChoiceComponent', () => {
  let component: ChapterChoiceComponent;
  let fixture: ComponentFixture<ChapterChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
