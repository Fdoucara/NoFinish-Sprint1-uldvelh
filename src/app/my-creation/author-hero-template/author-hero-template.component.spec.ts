import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorHeroTemplateComponent } from './author-hero-template.component';

describe('AuthorHeroTemplateComponent', () => {
  let component: AuthorHeroTemplateComponent;
  let fixture: ComponentFixture<AuthorHeroTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorHeroTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorHeroTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
