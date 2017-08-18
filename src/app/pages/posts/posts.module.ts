import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { SimpleNotificationsModule } from 'angular2-notifications';

//import { SimpleNotificationsComponent } from 'angular2-notifications';
import { routing }       from './posts.routing';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    SimpleNotificationsModule,
    routing
  ],
  providers: [
    PostsService,
  ],
  declarations: [
    PostsComponent,
    //SimpleNotificationsComponent,
  ]
})
export class PostsModule {}
