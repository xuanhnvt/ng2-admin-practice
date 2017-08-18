import { Routes, RouterModule } from '@angular/router';
import { BankDetailsComponent } from './bank-details.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: BankDetailsComponent,
    children: [
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
