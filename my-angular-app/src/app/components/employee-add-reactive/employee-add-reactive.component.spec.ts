import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddReactiveComponent } from './employee-add-reactive.component';

describe('EmployeeAddReactiveComponent', () => {
  let component: EmployeeAddReactiveComponent;
  let fixture: ComponentFixture<EmployeeAddReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
