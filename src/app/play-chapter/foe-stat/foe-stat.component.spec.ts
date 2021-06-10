import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoeStatComponent } from './foe-stat.component';

describe('FoeStatComponent', () => {
  let component: FoeStatComponent;
  let fixture: ComponentFixture<FoeStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoeStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoeStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
