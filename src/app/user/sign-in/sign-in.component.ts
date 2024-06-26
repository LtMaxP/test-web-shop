import { Component } from '@angular/core';
import { IUserCredentials, IUser } from '../user.model';
import {FormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule, NgIf
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

export class SignInComponent {

  credentials : IUserCredentials = {email: '', password: ''}
  signInError: boolean = false;

  constructor( private userService: UserService, private router: Router) {
  }

     SignIn(){
      this.signInError = false;
      this.userService.signIn(this.credentials).subscribe({
        next: () => this.router.navigate(['/catalog']),
        error: () => (this.signInError = true)
      });
     }

}
