import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../model/comment.model';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPostApi: string;
  getCommentsApi: string;
  constructor(private http: HttpClient) {
    this.getPostApi='https://jsonplaceholder.typicode.com/posts';
    this.getCommentsApi='https://jsonplaceholder.typicode.com/comments?postId='
  }

  fetchPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.getPostApi);
  }
 
  fetchComments(postId:string):Observable<Comments[]> {
    return this.http.get<Comments[]>(this.getCommentsApi + postId);
  }

}
