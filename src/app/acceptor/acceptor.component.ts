import { Component, OnInit } from '@angular/core';
import { VicholaService } from '../vichola.service';
import { NgModel } from '@angular/forms';
import { List } from '../list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceptor',
  templateUrl: './acceptor.component.html',
  styleUrls: ['./acceptor.component.css']
})
export class AcceptorComponent implements OnInit {

  constructor(public vichola : VicholaService, public router: Router) { }
  
  bloodGroup: string;
  ngOnInit() {}

  getAcceptorData(form: NgModel){
    if (form.invalid){
      return;
    }
    this.bloodGroup = form.value.bloodGroup;
    console.log(this.bloodGroup);
    console.log("In acceptor.component")
    this.bloodGroup = form.value.bloodGroup;
    this.vichola.getBloodGroup(this.bloodGroup);
    this.router.navigate(['/Result']);
  }

}
