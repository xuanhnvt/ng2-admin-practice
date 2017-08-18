import { FormsModule } from '@angular/forms';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgaModule } from '../../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing }       from './bank-details.routing';
import { BankDetailsComponent } from './bank-details.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { BankBranchesComponent } from './bank-branches/bank-branches.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    NgaModule,
    routing
  ],
  providers: [
    
  ],
  declarations: [
    BankDetailsComponent,
    BankInfoComponent,
    BankBranchesComponent,
  ]
})
export class BankDetailsModule {}
