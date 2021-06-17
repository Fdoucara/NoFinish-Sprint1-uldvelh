import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextChapterComponent } from './edit-text-chapter.component';

describe('EditTextChapterComponent', () => {
  let component: EditTextChapterComponent;
  let fixture: ComponentFixture<EditTextChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTextChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
