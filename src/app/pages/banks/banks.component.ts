import { Component, OnInit } from '@angular/core';

import { BanksService } from './banks.service';
import { Bank } from './banks.model';

@Component({
  selector: 'banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {
  constructor(private _banksService: BanksService) { 
  }

  ngOnInit() {
    
  }

}
