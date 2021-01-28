import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {HomeComponent} from './core/components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: LoginLayoutComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contacts',
        loadChildren: () => import('./modules/contacts/contacts.module').then((m) => m.ContactsModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
