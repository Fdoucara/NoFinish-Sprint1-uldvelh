import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayChapterComponent } from './play-chapter.component';

describe('PlayChapterComponent', () => {
  let component: PlayChapterComponent;
  let fixture: ComponentFixture<PlayChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
