import { Component, OnInit } from '@angular/core';
import { register } from 'src/app/model/userData';
import { FormBuilder, FormControl , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerDetails !: FormGroup
  registerData : register[] = []


  constructor(private formBuilder : FormBuilder , private router : Router) {}

  userDetails = new FormGroup({
    name : new FormControl (''),
    email : new FormControl (''),
    password : new FormControl (''),
    confirmPassword : new FormControl('')
  })

  ngOnInit(): void {
      this.userDetails = this.formBuilder.group({
      name : [''],
      email : [''],
      password : [''],
      confirmPassword : ['']
    })

    
  }

  registerMe(){
    if(this.userDetails.value.confirmPassword == this.userDetails.value.password){
      console.warn(this.userDetails.value);
      this.router.navigate(['/otp'])
    }else{
      console.log("no");
  }

}
}
