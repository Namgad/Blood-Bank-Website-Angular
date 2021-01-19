import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { List } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class VicholaService {

  constructor(private http:HttpClient) { }
  private posts: List[] = [];
  // private data: List[] = [];
  public bloodGroup:string;

  private postUpdated = new Subject<List[]>();
  getPosts() {
    this.http.get<({message: string, posts: List[]})>("http://localhost:3000/api/posts")
    .subscribe((postData) => {
      this.posts = postData.posts;
      this.postUpdated.next([...this.posts]);
      console.log("In get");
      console.log(this.posts);
    })
  }

  getBloodGroup(bloodGroup){
    this.bloodGroup = bloodGroup;
  }

  sendBloodGroup(){
    console.log(this.bloodGroup);
    return this.bloodGroup;
  }

  getDonaterData(name:string, gender: string, bloodGroup:string, bloodReg:string, contact:string, address:string, eligibility:boolean){
    const post: List = {id: null, name: name, gender: gender, bloodGroup: bloodGroup, bloodReg: bloodReg, contact: contact, address:address, eligibilty: eligibility};
    // this.posts.push(post);
    // this.postUpdated.next([...this.posts]);
    console.log("In Service:",post);
    this.http
      .post<{message: string}>("http://localhost:3000/api/posts/", post)
      .subscribe(responseData => {
        console.log(responseData.message,"in HTTP");
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
      })
      console.log(this.posts);
  }

  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }
}
