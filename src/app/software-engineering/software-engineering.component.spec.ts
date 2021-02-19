import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineeringComponent } from './software-engineering.component';

describe('SoftwareEngineeringComponent', () => {
  let component: SoftwareEngineeringComponent;
  let fixture: ComponentFixture<SoftwareEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
