import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Showtime';
  navbg:any;
  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop, 'scroll-length !!!');
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.navbg = {'background':'#000000'}
    } else {this.navbg = {'background':'#aliceblue'}}
  }
}
