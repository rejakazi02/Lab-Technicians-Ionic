import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectWithComponent } from './connect-with.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConnectWithComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ConnectWithComponent
  ]
})
export class ConnectWithModule { }
