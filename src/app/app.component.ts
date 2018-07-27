import { Component } from '@angular/core';
import * as Immutable from 'immutable';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  ngAfterViewInit() {
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect:true,
     // autoplay: true,
      arrows:false,
    });
  }
}
