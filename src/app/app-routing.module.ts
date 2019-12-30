import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'modal-add-user',
    loadChildren: () => import('./pages/modal-add-user/modal-add-user.module').then( m => m.ModalAddUserPageModule)
  },
  {
    path: 'modal-add-task',
    loadChildren: () => import('./pages/modal-add-task/modal-add-task.module').then( m => m.ModalAddTaskPageModule)
  },
  {
    path: 'modal-select-state',
    loadChildren: () => import('./pages/modal-select-state/modal-select-state.module').then( m => m.ModalSelectStatePageModule)
  },
  {
    path: 'modal-select-user',
    loadChildren: () => import('./pages/modal-select-user/modal-select-user.module').then( m => m.ModalSelectUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
