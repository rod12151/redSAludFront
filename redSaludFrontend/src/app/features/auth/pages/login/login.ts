import { Component, inject, signal } from '@angular/core';
import { LoginRequest, rolesResponse, TokenResponse } from '../../models/auth';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
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
  router = inject(Router)
  authService = inject(AuthService)

  isLoading = false;

  messageError = signal<string>("");
   messageSucces = signal<string>("");
  

  loginForm: FormGroup = new FormGroup({
    username: new FormControl("",[Validators.email,Validators.required]),
    password: new FormControl("",[Validators.required,Validators.minLength(8)])
  })

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onLogin() {
    this.messageError.set("")
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;

    const formValue = this.loginForm.value as LoginRequest;

    this.authService.onLogin(formValue).subscribe({
      next: () => {
        const roles: rolesResponse = this.authService.getRole()
      
        this.messageSucces.set('¡Bienvenido!');
        setTimeout(() => {
          if (roles.superAdmin) {

            this.router.navigateByUrl('/admin')
          }
          else if (roles.admin) {

            this.router.navigateByUrl('/estadistica')
          }
          else if (roles.user) {

            this.router.navigateByUrl('/')
          }

 }, 800);
      },
      error: (error) => {
        console.log("gil")
        console.log(error)
          this.messageError.set(error)
        this.isLoading = false;
      },
      complete:()=>{
        this.isLoading = false
      }
    })
  }

}
