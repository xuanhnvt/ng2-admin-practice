import { Component, OnInit, Input } from '@angular/core';
import { BanksService } from './../../banks.service';
import { Bank } from './../../banks.model';

@Component({
  selector: 'bank-info',
  templateUrl: './bank-info.component.html',
  styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {
  @Input() bankId: number;
  bankInfo: Bank;
  constructor(private _banksService: BanksService) { }

  ngOnInit() {
    this.getBank(this.bankId);
  }

  private getBank(id: number): void {
    this._banksService.getBank(id)
        .then((bank) => {
          this.bankInfo = bank;
        });
  }

}
