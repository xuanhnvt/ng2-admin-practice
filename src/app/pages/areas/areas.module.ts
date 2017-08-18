import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing }       from './areas.routing';
import { AreasComponent } from './areas.component';
import { AreasService } from './areas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  providers: [
    AreasService,
  ],
  declarations: [
    AreasComponent,
  ]
})
export class AreasModule {}
