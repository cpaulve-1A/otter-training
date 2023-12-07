import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCreationExercisePresComponent } from './component-creation-exercise-pres.component';

describe('ComponentCreationExercisePresComponent', () => {
  let component: ComponentCreationExercisePresComponent;
  let fixture: ComponentFixture<ComponentCreationExercisePresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentCreationExercisePresComponent]
    });
    fixture = TestBed.createComponent(ComponentCreationExercisePresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
