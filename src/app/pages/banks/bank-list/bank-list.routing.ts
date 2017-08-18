import { Routes, RouterModule } from '@angular/router';
import { BankListComponent } from './bank-list.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: BankListComponent,
    children: [
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
