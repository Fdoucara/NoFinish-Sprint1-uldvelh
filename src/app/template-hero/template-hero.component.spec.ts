import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHeroComponent } from './template-hero.component';

describe('TemplateHeroComponent', () => {
  let component: TemplateHeroComponent;
  let fixture: ComponentFixture<TemplateHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
