import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFightComponent } from './play-fight.component';

describe('PlayFightComponent', () => {
  let component: PlayFightComponent;
  let fixture: ComponentFixture<PlayFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayFightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
