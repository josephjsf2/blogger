import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { NavListComponent } from './nav-list/nav-list.component';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, NavListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ], exports: [
    MaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    LayoutComponent,
    NavListComponent
  ]
})
export class CoreModule { }
