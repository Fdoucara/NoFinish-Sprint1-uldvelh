import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorChapterComponent } from './author-chapter.component';

describe('AuthorChapterComponent', () => {
  let component: AuthorChapterComponent;
  let fixture: ComponentFixture<AuthorChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
