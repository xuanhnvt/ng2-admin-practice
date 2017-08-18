import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './banks.routing';
import { BanksComponent } from './banks.component';
import { BanksService } from './banks.service';
//import { DefaultModal } from './shared/default-modal/default-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  providers: [
    BanksService,
  ],
  //entryComponents: [DefaultModal],
  declarations: [
    BanksComponent,
    //DefaultModal
  ]
})
export class BanksModule {}
