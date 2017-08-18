import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
