import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule

  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModule { }
