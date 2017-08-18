import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  backToList(): void {
    //window.alert('Back to list');
    // relative path, not work, fix later
    //this.router.navigate(['../../post-list'], { relativeTo: this.route });
    
    // absolute path
    this.router.navigate(['/pages/posts/post-list']);
  }
}
