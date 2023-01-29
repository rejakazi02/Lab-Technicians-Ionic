import { Component, OnInit } from '@angular/core';
import { CarouselCntrlService } from '../../services/carousel-cntrl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public carousel: CarouselCntrlService
  ) { }

  ngOnInit() {
        /*
     * Call setTimer();
     */
        setInterval(() =>{
          this.setTimer();
       },1000)
  }

  /*** clock calculation */
  days:any;
  hours:any;
  min:any;
  sec:any;
  result :any;
/**
 * setTimer()
 */
setTimer(){
    var dest = new Date("jan 3, 2023 10:00:00").getTime();
    var now = new Date().getTime();
    var diff = dest - now;
    this.days = Math.floor(diff/(1000*60*60*24));
    this.hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
    this.min = Math.floor((diff % (1000*60*60))/(1000*60));
    this.sec = Math.floor((diff % (1000*60))/1000);;
    /**
     * Some Condition
     */
      if(this.days < 10){
        this.days = '0'+this.days;
      }
      if(this.hours < 10){
        this.hours = "0" + this.hours;
      }
      if(this.min < 10){
        this.min = "0" + this.min;
      }
      if(this.sec < 10){
        this.sec = "0" + this.sec;
      }/* condition end */
    /*  Result */
    this.result = `${this.days} : ${this.hours} : ${this.min} : ${this.sec}`;
}



    /*** products area */
    products: any[] = [
      {
        _id: 1,
        image: './assets/images/temp/products/01.png',
        name: 'Capsicum',
        prvPrice: 90,
        currPrice: 80,
        unit: 'piece',
        routerLink: "/product-details"
      },
      {
        _id: 2,
        image: './assets/images/temp/products/02.png',
        name: 'Carrot',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 3,
        image: './assets/images/temp/products/03.png',
        name: 'Tomato',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 4,
        image: './assets/images/temp/products/07.jpg',
        name: 'Onion',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 5,
        image: './assets/images/temp/products/05.png',
        name: 'Banana',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 6,
        image: './assets/images/temp/products/06.png',
        name: 'Guava ',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 7,
        image: './assets/images/temp/products/07.png',
        name: 'Licu',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 8,
        image: './assets/images/temp/products/08.png',
        name: 'Pine Apple',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
  
      {
        _id: 9,
        image: './assets/images/temp/products/09.png',
        name: 'Mango',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 10,
        image: './assets/images/temp/products/10.png',
        name: 'Potato ',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 11,
        image: './assets/images/temp/products/01.png',
        name: 'Capsicum',
        prvPrice: 90,
        currPrice: 80,
        unit: 'piece',
        routerLink: "/product-details"
      },
      {
        _id: 12,
        image: './assets/images/temp/products/02.png',
        name: 'Carrot',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 13,
        image: './assets/images/temp/products/03.png',
        name: 'Tomato',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 14,
        image: './assets/images/temp/products/07.jpg',
        name: 'Onion',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
      {
        _id: 15,
        image: './assets/images/temp/products/05.png',
        name: 'Banana',
        prvPrice: 34,
        currPrice: 23,
        unit: 'kilo',
        routerLink: "/product-details"
      },
    ];


    articles:any[] =[
      {
        _id:"1",
        title:"Downshiftology",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... ",
        routerLink:"#",
        articleImg:"./assets/images/temp/image/pexels-wendy-wei-1656666.jpg"
      },
      {
        _id:"2",
        title:"The Recipe Critic",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... ",
        routerLink:"#",
        articleImg:"./assets/images/temp/image/pexels-photomix-company-96616.jpg"
      },
      {
        _id:"3",
        title:"Sallys Baking Addiction",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ... ",
        routerLink:"#",
        articleImg:"./assets/images/temp/image/pexels-roman-pohorecki-23388.jpg"
      }
    ]

    offers:any[] =[
      {
        _id:"1",
        offerImage:"./assets/images/temp/image/offer banner website copy.png",
        routerLink:"#"
      },
      {
        _id:"1",
        offerImage:"./assets/images/temp/image/Shagotom Offer.png",
        routerLink:"#"
      }
    ]

      /****
 * category Data
 */
   brandData:any[] =[
    {
      _id:1,
      title:"Natural Greeny",
      subTitle:"(45 items)",
      routerLink:'#',
      image:"./assets/images/temp/image/07.jpg"
    },
    {
      _id:2,
      title:"Vegan Lover",
      subTitle:"(45 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/08.jpg"
    },
    {
      _id:3,
      title:"organic foody",
      subTitle:"(35 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/09.jpg"
    },
    {
      _id:4,
      title:"Ecomart Limited",
      subTitle:"(27 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/10.jpg"
    },
    {
      _id:5,
      title:"Fresh Fortune",
      subTitle:"(34 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/11.jpg"
    },
    {
      _id:6,
      title:"Econature",
      subTitle:"(34 Items)",
      routerLink:'#',
      image:"./assets/images/temp/image/12.jpg"
    },
  ]
  
  

}
