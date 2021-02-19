import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeDimensionsGamesComponent } from './three-dimensions-games/three-dimensions-games.component';
import { TwoDimensionsGamesComponent } from './two-dimensions-games/two-dimensions-games.component';
import { VideoGamesComponent } from './video-games.component';

const routes: Routes = [
  { path: '', component: VideoGamesComponent },
  { path: '2d-games', component: TwoDimensionsGamesComponent },
  { path: '3d-games', component: ThreeDimensionsGamesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoGamesRoutingModule { }
