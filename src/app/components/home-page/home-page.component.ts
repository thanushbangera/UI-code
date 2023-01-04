import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home-service';
import { User } from '../model/UserFields';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  displayedColumns = ['userId', 'name', 'phone'];
  dataSource: any;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<User>();
    this.homeService.getUserList().subscribe((response) => {
      this.dataSource = response;
    });
  }

  getUserDetails(userId: number) {
    this.router.navigate([`user-detail/${userId}`]);
  }

}



