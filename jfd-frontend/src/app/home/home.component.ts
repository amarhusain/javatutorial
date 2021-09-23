import { Component, OnInit } from '@angular/core';
import { User } from '../signup/user.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public users: User[] = [];
  displayedColumns: string[] = ['id', 'fname', 'lname', 'mobile', 'email', 'gender'];
  dataSource: User[] = [];
  showUpdateBtn = true;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getUsers().subscribe(data => {
      console.log("data -- ", data);
      this.users = data;
      this.dataSource = data;
    });

    
  }


  deleteUser(user:User) {
    this.homeService.deleteUser2(user).subscribe( response => {
      if(response){
        this.users = response;
      }
    })
  }

  editUser(){
    this.showUpdateBtn = false;
  }
  updateUser(user: User){

  }

}
