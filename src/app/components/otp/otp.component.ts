import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
 showOtp : boolean = false
 number : string = ''
  constructor(private router : Router) { }

  ngOnInit(): void {}

  sendOtp(){
    if(this.number == ''){
      alert ("please enter number")
    }else{
      this.showOtp = true
      console.log(this.number);
    }
  }

  validate(){
    this.router.navigate(['/notes'])
  }

}
