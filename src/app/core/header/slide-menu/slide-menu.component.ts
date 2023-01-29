import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent implements OnInit {
  // slide
   slideMenu = false;

  constructor() { }

  ngOnInit() {}

  /**
   * SLIDE CONTROLL
   * slideMenuOpen()
   * slideMenuClose()
   */
   slideMenuOpen(){
     this.slideMenu = true;
   }
   slideMenuClose(){
     this.slideMenu = false;
   }

}
