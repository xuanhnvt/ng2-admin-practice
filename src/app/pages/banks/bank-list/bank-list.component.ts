import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from '../shared/default-modal/default-modal.component';

import { Bank } from '../banks.model';
import { BanksService } from '../banks.service';

@Component({
  selector: 'bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss'],
})

export class BankListComponent implements OnInit {
  query: string = '';

  settings = {
    mode: 'external',
    hideSubHeader: true,
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-eye"></i>',
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
        type: 'string',
        filter: false
      },
      logo: {
        title: 'Logo',
        type: 'number',
        filter: false
      },
      slug: {
        title: 'Slug',
        type: 'string',
        filter: false
      },
      main_color: {
        title: 'Main Color',
        type: 'string',
        filter: false
      },
      max_loan_duration: {
        title: 'Max Loan Duration',
        type: 'number',
        filter: false
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();
  //bankItems: Bank[];
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _banksService: BanksService,
    private _modalService: NgbModal) { 
    //this._banksService.getBanks().then(banks => this.bankItems = banks);
    this._banksService.getBanks().then((banks) => {
      this.source.load(banks);
    });
  }

  ngOnInit() {
  }

  /*onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      // delete from database
      //this._banksService.deleteBank(event.data['id']);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }*/

  onDelete(event): void {

    const activeModal = this._modalService.open(DefaultModal, {size: 'sm'});
    activeModal.componentInstance.modalHeader = 'Delete Bank';
    activeModal.componentInstance.modalContent = `Just show popup for testing, do nothing with data`;
    // show modal form to confirm
    /*if (window.confirm('Are you sure you want to delete?')) {
      
    } else {
      
    }*/
  }

  onEdit(event) {
    // not work, fix later
    //this._router.navigate(['../bank-details'], { relativeTo: this._currentRoute });
    
    // absolute path
    this._router.navigate(['/pages/banks/bank-details', event.data['id']]);
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'name',
        search: query
      },
      {
        field: 'slug',
        search: query
      }
    ], false); 
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
}
