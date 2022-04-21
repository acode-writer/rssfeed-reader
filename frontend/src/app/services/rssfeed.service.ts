import { RssFeed } from './../models/rssfeed.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Observer } from 'rxjs';
import { Item } from './../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class RssfeedService {
  items!: Observable<Item[]>; 
  feed !: RssFeed;
  begin = 0;
  numberOfpages!: number;
  itemPerPage = 8;
  paginationArray  = [0];
  constructor(private httpClient: HttpClient) { }

  getAllRssFeed():Observable<RssFeed> {
    return this.httpClient.get<RssFeed>(environment.rssFeedBackendUrl);
  }
  onClickPagination(index: number) {
    this.begin = (index) * this.itemPerPage;
    const end = this.begin + this.itemPerPage;
    console.log(this.begin,end);
    
    this.items = Observable.create((observer: Observer<Item[]>) => {
      const item = this.feed.items.slice(this.begin,end);
      observer.next(item)
    });
  }
}
