import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviedataService } from '../moviedata.service';
import {ActivatedRoute} from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';


@Component({
selector: 'app-subcategory',
templateUrl: './subcategory.page.html',
styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {

    constructor(public http: HttpClient, public dataservice: MoviedataService, public actrouter: ActivatedRoute) {
    }
    id: any;
    date = new Date();
    // path: any;
    year: number;
    rating: any;
    category: string;

    public data = [];


    ngOnInit() {
        this.dataservice.getData().subscribe(result => this.data = result);
        this.actrouter.params.subscribe(params => {
            // tslint:disable-next-line: no-string-literal
            this.id = params['id'];
            // console.log(this.id);
        });

        // switch (this.id) {
        //     case '1': {
        //        this.year = 2019;
        //        break;
        //     }
        //     case '2': {
        //         this.rating = 4;
        //         break;
        //      }
        //      case '3': {
        //         this.category = 'action';
        //         break;
        //      }
        //      case '4': {
        //         this.category = 'comedy';
        //         break;
        //      }
        //      case '5': {
        //         this.category = 'horror';
        //         break;
        //      }
        //      case '6': {
        //         this.category = 'animation';
        //         break;
        //      }
        //     default: {
        //         console.log('Invalid Choice');
        //         break;
        //     }
        // }
    }

}
