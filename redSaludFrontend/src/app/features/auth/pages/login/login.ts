import { Component, inject } from '@angular/core';
import { LoginRequest, TokenResponse } from '../../models/auth';
import {ReactiveFormsModule,FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { error } from 'console';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
router= inject(Router)
authService = inject(AuthService)

loginForm: FormGroup = new FormGroup({
  username: new FormControl(""),
  password: new FormControl("")
})

  onLogin(){
    const formValue = this.loginForm.value as LoginRequest;
    this.authService.onLogin(formValue).subscribe({
      next:(response:TokenResponse)=>{
        
        if(response){
          this.router.navigateByUrl('/admin')
        } else {
          console.log("errorrrrr"+ response)
        }
        console.log(response)
      },
      error:(error)=>{
        console.error(error)
      }
    })
  }

}
