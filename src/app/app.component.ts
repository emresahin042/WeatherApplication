import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  router: Router
  constructor(router: Router)
  {
    this.router = router;
  }
  
    ngOnInit() {
    this.router.navigate(['/']);
  }
  

}
