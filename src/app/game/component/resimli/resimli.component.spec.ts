import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResimliComponent } from './resimli.component';

describe('ResimliComponent', () => {
  let component: ResimliComponent;
  let fixture: ComponentFixture<ResimliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResimliComponent]
    });
    fixture = TestBed.createComponent(ResimliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
