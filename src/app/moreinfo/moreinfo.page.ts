import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviedataService } from '../moviedata.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.page.html',
  styleUrls: ['./moreinfo.page.scss'],
})
export class MoreinfoPage implements OnInit {

  date = new Date();
  public data = [];
  constructor(public http: HttpClient, public dataservice: MoviedataService , public actrouter: ActivatedRoute ) { }
  title: any;


  ngOnInit() {
    this.dataservice.getData().subscribe(result => this.data = result);
    this.actrouter.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.title = params['desc'];
      console.log(this.title);
  });
  }

}
