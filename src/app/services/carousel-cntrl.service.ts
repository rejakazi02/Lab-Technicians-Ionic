import { Injectable } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow,EffectFade,Autoplay,Pagination, Navigation,Grid } from "swiper";
// install Swiper modules
SwiperCore.use([EffectCoverflow,EffectFade,Autoplay,Pagination, Navigation,Grid]);

@Injectable({
  providedIn: 'root'
})
export class CarouselCntrlService {

  constructor() { }
  /**
   * CategorySlide
   */
  categorySlideOption = {
    initialSlide: 3,
    speed: 400,
    slidesPerView:3,
    spaceBetween:15,
    pagination:false,
    loop:true,
    autoplay:true,
    grid:{
      rows: 2
    },
    breakpoints:{
      '0': {
        slidesPerView: 3,
        spaceBetween: 8
      },
      '450': {
        slidesPerView: 3,
        spaceBetween:15,
      }
    
  }
}

productSlideOption = {
  initialSlide: 3,
  speed: 400,
  slidesPerView:3,
  spaceBetween:15,
  pagination:false,
  loop:true,
  autoplay:true,
  grid:{
    rows: 2
  },
  breakpoints:{
    '0': {
      slidesPerView: 2,
      spaceBetween: 8
    },
    '500': {
      slidesPerView: 3,
      spaceBetween:15,
    }
  
}
}
blogSlideOption = {
  initialSlide: 3,
  speed: 400,
  slidesPerView:3,
  spaceBetween:15,
  pagination:false,
  loop:true,
  autoplay:true,
  breakpoints:{
    '0': {
      slidesPerView: 1,
      spaceBetween: 10
    },
    '470': {
      slidesPerView: 2,
      spaceBetween:10,
    }
  
}
}

offersSlideOption = {
  initialSlide: 3,
  speed: 400,
  slidesPerView:3,
  spaceBetween:15,
  pagination:false,
  loop:true,
  autoplay:true,
  breakpoints:{
    '0': {
      slidesPerView: 1,
      spaceBetween: 10
    },
    '500': {
      slidesPerView: 2,
      spaceBetween:10,
    }
  
}
}

brandSlideOption = {
  initialSlide: 3,
  speed: 400,
  slidesPerView:3,
  spaceBetween:15,
  pagination:false,
  loop:true,
  autoplay:true,
  breakpoints:{
    '0': {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    '500': {
      slidesPerView: 4,
      spaceBetween:10,
    }
  
}
}

specialOfferSlideOption = {
  initialSlide: 3,
  speed: 400,
  slidesPerView:3,
  spaceBetween:15,
  pagination:false,
  loop:true,
  autoplay:true,
  breakpoints:{
    '0': {
      slidesPerView: 1,
      spaceBetween: 10
    },
    '500': {
      slidesPerView: 2,
      spaceBetween:10,
    }
  
}
}






}