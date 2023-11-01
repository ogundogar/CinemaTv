import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplikComponent } from './replik.component';

describe('ReplikComponent', () => {
  let component: ReplikComponent;
  let fixture: ComponentFixture<ReplikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplikComponent]
    });
    fixture = TestBed.createComponent(ReplikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
