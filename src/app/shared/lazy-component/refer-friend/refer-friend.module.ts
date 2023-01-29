import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferFriendComponent } from './refer-friend.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReferFriendComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ReferFriendComponent
  ]
})
export class ReferFriendModule { }
