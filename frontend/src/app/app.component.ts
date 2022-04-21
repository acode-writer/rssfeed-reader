import { Item } from './models/item.model';
import { RssfeedService } from './services/rssfeed.service';
import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RssFeed} from "./models/rssfeed.model";
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  
  constructor(private httpClient: HttpClient, public rssFeedService: RssfeedService){}

  async ngOnInit() {
    this.rssFeedService.getAllRssFeed().subscribe(
      response => {
        this.rssFeedService.feed = response;
        this.rssFeedService.numberOfpages = Math.ceil(response.length / this.rssFeedService.itemPerPage) - 1;
        this.rssFeedService.paginationArray.pop();
        for (let index = 0; index <this.rssFeedService.numberOfpages; index++) {
          this.rssFeedService.paginationArray.push(index);
        }
        
        this.rssFeedService.items = Observable.create( (observer: Observer<any>) => {
          const end = this.rssFeedService.begin + this.rssFeedService.itemPerPage;
          const items = <[Item]>response.items.slice(this.rssFeedService.begin,end);
          observer.next(items);
        })
        
      }
    )
  }
  
}
