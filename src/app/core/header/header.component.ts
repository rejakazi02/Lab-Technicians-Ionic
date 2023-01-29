import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselCntrlService } from 'src/app/services/carousel-cntrl.service';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput') searchInput!:ElementRef;
  @ViewChild('slideMenu')   slideMenu:SlideMenuComponent;
    /**
   *Search Anim 
   */
   txt = "Search products in red grocer...";
   char =  0;
   typeOutOnGoing :any;
   placeValue ="|";

  constructor(
    private router:Router,
    private carousel:CarouselCntrlService 
  ) { }

  ngOnInit() {
    this.searchTypeIt();
  }
    /**
   * Search Anim
   */

     searchTypeIt(){
      const time = 200;
      this.typeOutOnGoing = setInterval(() => {
        this.char++;
        let type = this.txt.slice(0, this.char);
           this.placeValue = type + "|";
        /**
         * Condition
         */
        if(this.char == this.txt.length){
          this.char = 0;
        }
      },time)
    }

    /***
     * SLIDE MENU CONTROLL
     * slideMenuOpen()
     */
     slideMenuOpen(){
      this.slideMenu.slideMenuOpen();
     }

    
}
