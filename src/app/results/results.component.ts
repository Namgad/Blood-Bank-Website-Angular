import { Component, OnInit } from '@angular/core';
import { VicholaService } from '../vichola.service';
import { List } from '../list.model';

import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  
  public posts: List[] = [];
  // flag = 0;
  // private data: List[] = [];
  public bloodGroup : string;
  private postUpdated = new Subject<List[]>();
  
  constructor(public vichola: VicholaService, public http: HttpClient) {
    
    this.http.get<({message: string, posts: List[]})>("http://localhost:3000/api/posts")
    .subscribe((postData) => {
      this.posts = postData.posts;
      this.postUpdated.next([...this.posts]);
      console.log("In get");
      console.log(this.posts);
    })
    
  this.bloodGroup = this.vichola.sendBloodGroup();
  }

  ngOnInit() {
  }

}
