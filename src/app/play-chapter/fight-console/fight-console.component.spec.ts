import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightConsoleComponent } from './fight-console.component';

describe('FightConsoleComponent', () => {
  let component: FightConsoleComponent;
  let fixture: ComponentFixture<FightConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
