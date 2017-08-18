import { BanksService } from './../../banks.service';
import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'bank-branches',
  templateUrl: './bank-branches.component.html',
  styleUrls: ['./bank-branches.component.scss']
})
export class BankBranchesComponent implements OnInit {
  settings = {
    //hiddenSubHeader: true,
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        filter: false
      },
      name: {
        title: 'Name',
        type: 'string'
      },
      slug: {
        title: 'Slug',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  @Input() bankId: number;
  constructor(private _banksService: BanksService) { 
    
  }

  ngOnInit() {
    this._banksService.getBankBranches(this.bankId).then((branches) => {
      this.source.load(branches);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
