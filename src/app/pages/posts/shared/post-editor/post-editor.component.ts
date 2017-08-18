import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from './../../posts.service';

import { Post } from './../../posts.model';
import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'post-editor',
  styleUrls: [('./post-editor.component.scss')],
  templateUrl: './post-editor.component.html'
})

export class PostEditor implements OnInit {
  config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  postDetails: Post;
  action: string = 'create';
  modalHeader: string;

  constructor(private activeModal: NgbActiveModal, private _postsService: PostsService) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }

  save() {
    if (this.action === 'edit') {
        this._postsService.updatePost(this.postDetails).then(() => this.activeModal.close());
    } else {
        this._postsService.createPost(this.postDetails).then(() => this.activeModal.close());
    }
  }
}
