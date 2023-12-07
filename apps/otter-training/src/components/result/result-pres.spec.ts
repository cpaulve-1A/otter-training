import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPresComponent } from './result-pres.component';

describe('ResultPresComponent', () => {
  let component: ResultPresComponent;
  let fixture: ComponentFixture<ResultPresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultPresComponent]
    });
    fixture = TestBed.createComponent(ResultPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
