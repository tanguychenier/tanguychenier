import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimensionsGamesComponent } from './two-dimensions-games.component';

describe('TwoDimensionsGamesComponent', () => {
  let component: TwoDimensionsGamesComponent;
  let fixture: ComponentFixture<TwoDimensionsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDimensionsGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDimensionsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
