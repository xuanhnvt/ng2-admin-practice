import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: PostDetailsComponent,
    children: [
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
