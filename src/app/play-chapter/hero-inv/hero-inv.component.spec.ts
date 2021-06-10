import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInvComponent } from './hero-inv.component';

describe('HeroInvComponent', () => {
  let component: HeroInvComponent;
  let fixture: ComponentFixture<HeroInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
