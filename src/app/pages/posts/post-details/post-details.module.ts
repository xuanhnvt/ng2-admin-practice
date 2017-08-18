import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing }       from './post-details.routing';
import { PostDetailsComponent } from './post-details.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    NgaModule,
    routing
  ],
  providers: [
    
  ],
  declarations: [
    PostDetailsComponent,
  ]
})
export class PostDetailsModule {}
