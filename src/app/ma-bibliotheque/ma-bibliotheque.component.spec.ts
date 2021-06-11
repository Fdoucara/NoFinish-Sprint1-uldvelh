import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaBibliothequeComponent } from './ma-bibliotheque.component';

describe('MaBibliothequeComponent', () => {
  let component: MaBibliothequeComponent;
  let fixture: ComponentFixture<MaBibliothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaBibliothequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
