import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutTabPageRoutingModule } from './workout-tab-routing.module';

import { WorkoutTabPage } from './workout-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutTabPageRoutingModule
  ],
  declarations: [WorkoutTabPage]
})
export class WorkoutTabPageModule {}
