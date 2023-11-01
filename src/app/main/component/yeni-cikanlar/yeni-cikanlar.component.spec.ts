import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniCikanlarComponent } from './yeni-cikanlar.component';

describe('YeniCikanlarComponent', () => {
  let component: YeniCikanlarComponent;
  let fixture: ComponentFixture<YeniCikanlarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YeniCikanlarComponent]
    });
    fixture = TestBed.createComponent(YeniCikanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
