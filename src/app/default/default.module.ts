import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { FormsModule } from '@angular/forms';
import { DefaultRoutingModule } from './default-routing.module';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DefaultRoutingModule
  ],
})

export class DefaultModule { }
