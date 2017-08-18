import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PostEditor } from './../shared/post-editor/post-editor.component';

import { Post } from '../posts.model';
import { PostsService } from '../posts.service';

import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})

export class PostListComponent implements OnInit {
  query: string = '';
  closeResult: string;
  selectedPost: Post;

  settings = {
    mode: 'external',
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
      title: {
        title: 'Title',
        type: 'string'
      },
      publish: {
        title: 'Publish',
        type: 'number',
        filter: false
      },
      slug: {
        title: 'Slug',
        type: 'string',
        filter: false
      },
      short_desc: {
        title: 'Description',
        type: 'string',
        filter: false
      },
      tags: {
        title: 'Tags',
        type: 'string',
        filter: false
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();
  //postItems: Post[];
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _postsService: PostsService,
    private _modalService: NgbModal,
    private _notificationsService: NotificationsService ) {
      
  }

  ngOnInit() {
    // load posts from database into view
    this.loadPosts();
  }

  onDelete(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      

      // delete from database
      this._postsService.deletePost(event.data['id']).then(() => {
        this.loadPosts();
        this._notificationsService.success('Delete Post', 'Successful');
      });

      //event.confirm.resolve();

      // then reload table
      /*this._postsService.getPosts().then((posts) => {
      this.source.load(posts);
      this.source.refresh();
    });*/
    } else {
      //event.confirm.reject();
    }
  }

  onEdit(event) {
    // not work, fix later
    //this._router.navigate(['../post-details'], { relativeTo: this._currentRoute });
    
    // absolute path
    //this._router.navigate(['/pages/posts/post-details', event.data['id']]);
    const activeModal = this._modalService.open(PostEditor, {size: 'lg', backdrop: 'static'});
    activeModal.componentInstance.modalHeader = 'Edit Post';
    activeModal.componentInstance.action = 'edit';
    activeModal.componentInstance.postDetails = event.data;
    activeModal.result.then(() => {
      this.loadPosts();
      this._notificationsService.success('Edit Post', 'Successful');
    });
  }

  onCreate(event) {
    // not work, fix later
    //this._router.navigate(['../post-details'], { relativeTo: this._currentRoute });
    
    // absolute path
    //this._router.navigate(['/pages/posts/post-details', event.data['id']]);
    const activeModal = this._modalService.open(PostEditor, {size: 'lg', backdrop: 'static'});
    activeModal.componentInstance.modalHeader = 'Create Post';
    activeModal.componentInstance.action = 'create';
    activeModal.componentInstance.postDetails = new Post();

    // below code not refresh the view
    /*activeModal.result.then(() => {
      this.source.append(activeModal.componentInstance.postDetails);

      this.source.refresh();
    });*/
    activeModal.result.then(() => {
      this.loadPosts();
      this._notificationsService.success('Create Post', 'Successful');
    });
  }

  open(content) {
    this._modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  private loadPosts(): void {
    this._postsService.getPosts().then((posts) => {
      this.source.load(posts);
    });
  }
}
