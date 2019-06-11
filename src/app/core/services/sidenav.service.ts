import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  toggleSidenav: Subject<void>;
  sidenavToggled$: Observable<void>;

  constructor() {
    this.toggleSidenav = new Subject();
    this.sidenavToggled$ = this.toggleSidenav.asObservable();
  }

  toggle() {
    this.toggleSidenav.next();
  }
}
