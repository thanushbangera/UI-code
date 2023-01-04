import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/services/home-service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  displayedColumns = ['contactId', 'email', 'contactName'];
  dataSource: any;

  constructor(private router: Router, private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.userId;
    });
    this.homeService.getUser(this.userId).subscribe((response) => {
      this.dataSource = response;
    });

  }

}
