import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('window:load')
  onNavigate() {
    setTimeout(() => {
      this.router.navigate(['/', 'onboarding']);
    }, 1000);
  }
}
