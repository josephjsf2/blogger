import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sidenavSvc: SidenavService) { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavSvc.toggle();
  }
}
