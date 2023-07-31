import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductWebApiUI';

  constructor(private router: Router) {} 
  goProducts()
  {
    this.router.navigate(['products']);
  }

  addProducts()
  {
    this.router.navigate(['products/add']);
  }
}
