import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SidenavService } from './core/services/sidenav.service';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  destroy: Subject<void>;
  title = 'Blogger';


  constructor(private sidenavSvc: SidenavService) {
  }

  ngOnInit(): void {
    this.destroy = new Subject();

    // Menu toggle
    this.sidenavSvc.sidenavToggled$.pipe(
      takeUntil(this.destroy),
      tap(() => this.sidenav.toggle()),
      tap(() => console.log('xxxx'))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
