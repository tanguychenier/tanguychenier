import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackingComponent } from './hacking.component';

describe('HackingComponent', () => {
  let component: HackingComponent;
  let fixture: ComponentFixture<HackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
