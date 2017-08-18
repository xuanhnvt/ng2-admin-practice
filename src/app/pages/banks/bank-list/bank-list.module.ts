import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing }       from './bank-list.routing';
import { BankListComponent } from './bank-list.component';

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
    BankListComponent,
  ]
})
export class BankListModule {}
