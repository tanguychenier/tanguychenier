import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoGamesRoutingModule } from './video-games-routing.module';
import { ThreeDimensionsGamesComponent } from './three-dimensions-games/three-dimensions-games.component';


@NgModule({
  declarations: [ThreeDimensionsGamesComponent],
  imports: [
    CommonModule,
    VideoGamesRoutingModule
  ]
})
export class VideoGamesModule { }
