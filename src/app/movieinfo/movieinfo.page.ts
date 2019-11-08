import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.page.html',
  styleUrls: ['./movieinfo.page.scss'],
})
export class MovieinfoPage implements OnInit {
  date = new Date();
  data: any;
  constructor(public dataservice: MoviedataService , public actrouter: ActivatedRoute ) { }
  des: any;
  title: any;

  ngOnInit() {
    this.dataservice.getData().subscribe(result => {this.data = result; });
    this.actrouter.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.title = params['title'];
  });
  }

}
