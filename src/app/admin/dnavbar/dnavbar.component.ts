import { Router } from '@angular/router';
import { AutServiceService } from 'src/services/aut-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnavbar',
  templateUrl: './dnavbar.component.html',
  styleUrls: ['./dnavbar.component.css'],
})
export class DnavbarComponent implements OnInit {
  userName: string;
  role: string;
  lastName: string;
  imgUrl: string;
  email: string;
  constructor(
    private autServiceService: AutServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.local();
  }
  logout() {
    this.autServiceService.logout();
    this.router.navigate(['']);
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    window.location.reload();
  }

  local() {
    this.userName = localStorage.getItem('name');
    this.role = localStorage.getItem('role');
    this.lastName = localStorage.getItem('lastName');
    this.imgUrl = localStorage.getItem('image');
    this.email = localStorage.getItem('email');
  }
}
