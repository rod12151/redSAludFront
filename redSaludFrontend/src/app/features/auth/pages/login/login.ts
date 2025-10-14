import { Component, inject } from '@angular/core';
import { Loginrequest } from '../../models/auth';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
router= inject(Router)

  loginObj:Loginrequest={
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
