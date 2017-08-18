import { NgModule } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit, OnDestroy {
  id: number;
  private _sub: any;

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._sub = this._route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  backToList(): void {
    //window.alert('Back to list');
    // relative path, not work, fix later
    //this.router.navigate(['../../bank-list'], { relativeTo: this.route });
    
    // absolute path
    this._router.navigate(['/pages/banks/bank-list']);
  }
}
