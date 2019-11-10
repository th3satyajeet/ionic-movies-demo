import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviedataService } from '../moviedata.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPreView: 1.6

  };

  // info: [
  //   {
  //     path: '/1',
  //     category: 'New Release',
  //     src: 'https://image.tmdb.org/t/p/original/iVoZqwvGAwxvGVbYV5y04wpiBob.jpg'
  //   },
  //   {
  //     path: '/2',
  //     category: 'Most Popular',
  //     src: 'https://cdn11.bigcommerce.com/s-ujc2jertho/images/stencil/1280x1280/products/12583/11239/Avengers_Endgame__06921.1562707768.jpg?c=2&imbypass=on'
  //   },
  //   {
  //     path: '/3',
  //     category: 'Action',
  //     src: 'https://cdn3.movieweb.com/i/movie/HpFU6MXNB3UhU3t3uG8IGkOpdSmeRZ/384:50/The-Terminator.jpg'
  //   },
  //   {
  //     path: '/4',
  //     category: 'Comedy',
  //     src: 'https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/432977985.jpg'
  //   },
  //   {
  //     path: '/5',
  //     category: 'Horror',
  //     src: 'https://i.ebayimg.com/images/g/Xc8AAOSw-3FZF1CJ/s-l300.jpg'
  //   },
  //   {
  //     path: '/6',
  //     category: 'Animation',
  //     src: 'https://i.ebayimg.com/images/g/SRQAAOSwbVdbmoOx/s-l300.jpg'
  //   }
  // ];

  constructor(public http: HttpClient, public dataservice: MoviedataService,
    private route: Router,
    private menu: MenuController
    ) {
   // tslint:disable-next-line: no-unused-expression
  }

  date = new Date();
  public data: any;

  ngOnInit() {
    this.dataservice.getData().subscribe(result => this.data = result);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
