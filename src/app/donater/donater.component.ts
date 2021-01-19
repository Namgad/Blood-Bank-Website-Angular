import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { VicholaService } from '../vichola.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donater',
  templateUrl: './donater.component.html',
  styleUrls: ['./donater.component.css']
})
export class DonaterComponent implements OnInit {

  name: string;
  gender: string;
  bloodGroup: string;
  bloodReg: string;
  contact: string;
  address: string;
  eligibilty: boolean;
  
  constructor(public vichola : VicholaService, public route: Router) { }

  ngOnInit() {
  }

  donaterData(form : NgModel){
    if (form.invalid){
      return;
    }
    this.name = form.value.humanName;
    this.gender = form.value.gender;
    this.bloodGroup = form.value.bloodGroup;
    this.bloodReg = form.value.bloodReg;
    this.contact = form.value.contactNumber;
    this.address = form.value.homeAddress;
    this.eligibilty = form.value.eligibilty;
    console.log(this.name,this.gender,this.bloodGroup,this.bloodReg,this.contact,this.address,this.eligibilty);
    // var donatorinfo={name:this.name,gender:this.gender,bloodGroup:this.bloodGroup,bloodReg:this.bloodReg,contact":"8126753642","address":"Dehradun","eli":"true"};
    
    //this.http.post(url,dontorinfo);

    this.vichola.getDonaterData(this.name, this.gender, this.bloodGroup, this.bloodReg, this.contact, this.address, this.eligibilty);
    // form.reset();
    this.route.navigate(['/Index']);
  }
}
