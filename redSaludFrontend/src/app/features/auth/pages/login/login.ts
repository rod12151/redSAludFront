import { Component, inject } from '@angular/core';
import { LoginRequest } from '../../models/auth';
import {ReactiveFormsModule,FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
router= inject(Router)

loginForm: FormGroup = new FormGroup({
  username: new FormControl(""),
  password: new FormControl("")
})

  loginObj:LoginRequest={
    username:'',
    password:''
  }
  onLogin(){
    if(this.loginObj.username=='admin'&& this.loginObj.password=='112233'){
      this.router.navigateByUrl("/admin");
    }else{
      alert("Wrong Credentials")
    }
  }

}
