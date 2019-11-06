import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.page.html',
  styleUrls: ['./subcat.page.scss'],
})
export class SubcatPage implements OnInit {
  date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
