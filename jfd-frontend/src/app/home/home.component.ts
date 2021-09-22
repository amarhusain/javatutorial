import { Component, OnInit } from '@angular/core';
import { user } from '../signup/user.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public users: user[] = [];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getUsers().subscribe(data => {
      console.log("data -- ", data);
      this.users = data;
    });

    
  }

}
