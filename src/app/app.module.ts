import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { TwoDimensionsGamesComponent } from './video-games/two-dimensions-games/two-dimensions-games.component';
import { DefaultRoutingModule } from './default/default-routing.module';
import { VideoGamesRoutingModule } from './video-games/video-games-routing.module';
import { SoftwareEngineeringComponent } from './software-engineering/software-engineering.component';
import { HackingComponent } from './hacking/hacking.component';
import { HackingRoutingModule } from './hacking/hacking-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent,
    TwoDimensionsGamesComponent,
    SoftwareEngineeringComponent,
    HackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultRoutingModule,
    VideoGamesRoutingModule,
    HackingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
