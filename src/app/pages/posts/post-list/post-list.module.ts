import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgaModule } from '../../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ng2-ckeditor';

import { routing }       from './post-list.routing';
import { PostEditor } from './../shared/post-editor/post-editor.component';
import { PostListComponent } from './post-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    NgaModule,
    NgbModule,
    CKEditorModule,
    routing
  ],
  providers: [
    
  ],
  declarations: [
    PostListComponent,
    PostEditor,
  ],
  entryComponents: [PostEditor]
})
export class PostListModule {}
