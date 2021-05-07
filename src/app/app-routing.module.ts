import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'workout-tab',
    loadChildren: () => import('./workout-tab/workout-tab.module').then( m => m.WorkoutTabPageModule)
  },
  {
    path: 'friends-tab',
    loadChildren: () => import('./friends-tab/friends-tab.module').then( m => m.FriendsTabPageModule)
  },
  {
    path: 'profile-tab',
    loadChildren: () => import('./profile-tab/profile-tab.module').then( m => m.ProfileTabPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
