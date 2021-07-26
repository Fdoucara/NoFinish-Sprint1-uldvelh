import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLivresComponent } from './page-livres.component';

describe('PageLivresComponent', () => {
  let component: PageLivresComponent;
  let fixture: ComponentFixture<PageLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
