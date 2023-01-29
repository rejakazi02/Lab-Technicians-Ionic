import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BlogCardComponent
  ]
})
export class BlogCardModule { }
