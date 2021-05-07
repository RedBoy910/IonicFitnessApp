import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'friends-tab',
        loadChildren: () => import('../friends-tab/friends-tab.module').then(m => m.FriendsTabPageModule)
      },
      {
        path: 'profile-tab',
        loadChildren: () => import('../profile-tab/profile-tab.module').then(m => m.ProfileTabPageModule)
      },
      {
        path: 'workout-tab',
        loadChildren: () => import('../workout-tab/workout-tab.module').then(m => m.WorkoutTabPageModule)
      },
      {
        path: '',
        redirectTo: 'home/workout-tab',
        pathMatch: 'full'
      }
    ], 
  },
  {
    path: '',
    redirectTo: 'home/workout-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
