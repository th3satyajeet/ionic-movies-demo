import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviedataService } from '../moviedata.service';



@Component({
selector: 'app-subcategory',
templateUrl: './subcategory.page.html',
styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {

constructor(public http: HttpClient, public dataservice: MoviedataService) {
// tslint:disable-next-line: no-unused-expression

}

public data = [];


ngOnInit() {
this.dataservice.getData().subscribe(result => this.data = result);
}

}
