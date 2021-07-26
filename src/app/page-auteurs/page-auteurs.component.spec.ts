import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuteursComponent } from './page-auteurs.component';

describe('PageAuteursComponent', () => {
  let component: PageAuteursComponent;
  let fixture: ComponentFixture<PageAuteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAuteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
