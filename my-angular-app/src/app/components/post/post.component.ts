import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe(data=> {
      this.posts = data;
    })
  }

}
