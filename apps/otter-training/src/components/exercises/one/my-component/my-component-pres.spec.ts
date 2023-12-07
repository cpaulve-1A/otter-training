import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentPresComponent } from './my-component-pres.component';

describe('MyComponentPresComponent', () => {
  let component: MyComponentPresComponent;
  let fixture: ComponentFixture<MyComponentPresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponentPresComponent]
    });
    fixture = TestBed.createComponent(MyComponentPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
