import { Component } from '@angular/core';
import { IUser } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    FormsModule, NgIf
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  userCreation : IUser = {email: '', password: '', firstName: '', lastName: ''}
  registerError: boolean = false;

  constructor( private userService: UserService, private router: Router) {
  }

  RegisterNewUser(){
      this.registerError = false;
      this.userService.registerNewUser(this.userCreation).subscribe({
        next: () => this.router.navigate(['/catalog']),
        error: () => (this.registerError = true)
      });
     }
}
