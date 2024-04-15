import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './site-header/site-header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SiteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-web-shop';
}
