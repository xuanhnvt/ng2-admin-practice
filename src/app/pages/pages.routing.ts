import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'banks', loadChildren: './banks/banks.module#BanksModule' },
      { path: 'areas', loadChildren: './areas/areas.module#AreasModule' },
      { path: 'posts', loadChildren: './posts/posts.module#PostsModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
