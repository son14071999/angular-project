import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm!: NgForm

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('123');    
    console.log(this.loginForm.form)
    if(!this.loginForm.valid) {
      console.log('error');
      
    }else{
      console.log(this.loginForm.value);
      
    }
    // 
  }

}
