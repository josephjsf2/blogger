import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  constructor(private sidenavSvc: SidenavService) { }

  ngOnInit() {
  }

  sidenavClose() {
    this.sidenavSvc.toggle();
  }
}
