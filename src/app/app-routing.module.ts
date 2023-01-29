import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path:"",
    component:AppComponent,
    children:[
      {
        path:"",
        redirectTo:"splash",
        pathMatch:"full"
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'splash',
        loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
      },
      {
        path: 'onboarding',
        loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
      },
    ]

   },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },










 





 







 



 



 










 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy',
    preloadingStrategy: PreloadAllModules,
    // initialNavigation: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
