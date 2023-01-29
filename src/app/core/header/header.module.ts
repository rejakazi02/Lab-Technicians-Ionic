import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SlideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
