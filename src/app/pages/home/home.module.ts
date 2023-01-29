import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderModule } from '../../core/header/header.module';
import { BottomNavModule } from '../../shared/components/bottom-nav/bottom-nav.module';
import { SwiperModule } from 'swiper/angular';
import { ProductCardOneModule } from '../../shared/lazy-component/product-card-one/product-card-one.module';
import { ConnectWithModule } from '../../shared/lazy-component/connect-with/connect-with.module';
import { ReferFriendModule } from '../../shared/lazy-component/refer-friend/refer-friend.module';
import { MaterialModule } from '../../material/material.module';
import { BlogCardModule } from '../../shared/lazy-component/blog-card/blog-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    BottomNavModule,
    SwiperModule,
    ProductCardOneModule,
    ConnectWithModule,
    ReferFriendModule,
    MaterialModule,
    SwiperModule,
    BlogCardModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
