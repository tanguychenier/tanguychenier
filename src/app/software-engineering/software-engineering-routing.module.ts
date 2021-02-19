import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareEngineeringComponent } from './software-engineering.component';

const routes: Routes = [
  { path: '', component: SoftwareEngineeringComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareEngineeringRoutingModule { }
