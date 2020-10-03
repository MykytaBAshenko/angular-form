import { Component, OnInit } from '@angular/core';
import ServiceService from '../service.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  navbarInfo; 
  constructor(private ServiceService: ServiceService,) { }

  ngOnInit(): void {
    this.navbarInfo=this.ServiceService.getNavbarInfo()
  }


}
