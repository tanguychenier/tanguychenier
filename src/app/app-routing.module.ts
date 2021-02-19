import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/default', pathMatch: 'full' },
  {
    path: 'videogames',
    loadChildren: () => import('./video-games/video-games.module').then(m => m.VideoGamesModule)
  },
  {
    path: 'software-engineering',
    loadChildren: () => import('./software-engineering/software-engineering.module').then(m => m.SoftwareEngineeringModule)
  },
  {
    path: 'hacking',
    loadChildren: () => import('./hacking/hacking.module').then(m => m.HackingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
