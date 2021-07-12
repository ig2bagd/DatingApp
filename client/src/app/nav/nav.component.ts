import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // https://tutorial.tips/3-ways-to-fix-property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructorts/
  // https://fluin.io/blog/property-has-no-initializer-and-is-not-definitely-assigned
  // https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/learn/lecture/22400668#questions/13326164
  model: any = {}

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
  }

}
