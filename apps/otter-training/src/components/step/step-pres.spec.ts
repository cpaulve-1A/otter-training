import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPresComponent } from './step-pres.component';

describe('StepPresComponent', () => {
  let component: StepPresComponent;
  let fixture: ComponentFixture<StepPresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepPresComponent]
    });
    fixture = TestBed.createComponent(StepPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
