import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from './areas.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AreasComponent,
    children: [
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
