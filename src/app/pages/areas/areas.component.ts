import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { Area } from './areas.model';
import { AreasService } from './areas.service';

@Component({
  selector: 'areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})

export class AreasComponent implements OnInit {
  query: string = '';

  settings = {
    hiddenSubHeader: true,
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
      fee: {
        title: 'Fee',
        type: 'number',
        filter: false
      },
      priority: {
        title: 'Priority',
        type: 'number',
        filter: false
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();
  //areaItems: Area[];
  constructor(private _areasService: AreasService) { 
    //this._areasService.getAreas().then(areas => this.areaItems = areas);
    this._areasService.getAreas().then((areas) => {
      this.source.load(areas);
    });
  }

  ngOnInit() {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      

      // delete from database
      //this._areasService.deleteArea(event.data['id']);

      event.confirm.resolve();

      // then reload table
      /*this._areasService.getAreas().then((areas) => {
      this.source.load(areas);
      this.source.refresh();
    });*/
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      //event.newData['name'] += ' + added in code';
      //this._areasService.updateArea(event.newData);
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}
