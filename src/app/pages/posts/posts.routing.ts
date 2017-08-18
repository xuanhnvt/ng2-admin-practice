import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: PostsComponent,
    children: [
      { path: '', redirectTo: 'post-list', pathMatch: 'full' },
      { path: 'post-list', loadChildren: './post-list/post-list.module#PostListModule' },
      { path: 'post-details/:id', loadChildren: './post-details/post-details.module#PostDetailsModule' },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
