import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/model/comment.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  postId: string;
  comments: Comments[];
  


  constructor(private actRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.postId = this.actRoute.snapshot.paramMap.get('postId');
    //console.log(this.postId);
    this.postService.fetchComments(this.postId).subscribe(data=> {
      this.comments = data;
    })
  }

}
