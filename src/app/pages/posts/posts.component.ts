import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { Post } from './posts.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  options = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: true
  }

  constructor() {
  }

  ngOnInit() {
  }
}
