import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent {
  user: IUser | null = null;
  showSignOutMenu: boolean = false;

  constructor(private userService: UserService){

  }

  ngOnInit(){
    this.userService.getUser().subscribe({
      next: (user) => {this.user = user}
    })
  }

toggleSignOutMenu() {
  this.showSignOutMenu = !this.showSignOutMenu;
}

  signOut(){
    this.userService.signOut();
    this.showSignOutMenu = false
  }
}
