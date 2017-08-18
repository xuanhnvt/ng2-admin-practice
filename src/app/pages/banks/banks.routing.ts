import { Routes, RouterModule }  from '@angular/router';

import { BanksComponent } from './banks.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: BanksComponent,
    children: [
      { path: '', redirectTo: 'bank-list', pathMatch: 'full' },
      { path: 'bank-list', loadChildren: './bank-list/bank-list.module#BankListModule' },
      { path: 'bank-details/:id', loadChildren: './bank-details/bank-details.module#BankDetailsModule' },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
