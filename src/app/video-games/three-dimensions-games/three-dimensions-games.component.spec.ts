import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimensionsGamesComponent } from './three-dimensions-games.component';

describe('ThreeDimensionsGamesComponent', () => {
  let component: ThreeDimensionsGamesComponent;
  let fixture: ComponentFixture<ThreeDimensionsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDimensionsGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimensionsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
