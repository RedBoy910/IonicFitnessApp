import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutTabPage } from './workout-tab.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutTabPageRoutingModule {}
