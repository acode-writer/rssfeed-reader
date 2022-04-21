import { Item } from './../models/item.model';
import { RssfeedService } from './../services/rssfeed.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item!: Item;
  @Input() index!: number;
  target !: HTMLElement;
  referentiel !: HTMLElement;
  constructor(private rssFeedService: RssfeedService) { }

  ngOnInit(): void {
  }

  onTitleChange(event: Event) {
    this.target = event.target as HTMLElement
    const parent = (this.target.parentNode as HTMLElement);
    (event.target as HTMLElement).remove();
    const wrapper = document.createElement('div');
    wrapper.classList.add("col-auto");
    const input = document.createElement("input");
    input.type = 'text';
    input.className = 'form-control';
    input.id = 'inputPassword6'+this.index;
    input.value = this.item.title;
    input.addEventListener("change", (event: Event) => {
      const target = (event.target as HTMLInputElement);
        this.item.title = target.value;
    } );
    input.addEventListener("blur", (event: Event) => {
      this.onTitleBlur(event,parent);
    } );
    wrapper.appendChild(input);
    parent.prepend(wrapper);
  }
  onTitleBlur(event: Event, parent: HTMLElement) {
    const target = (event.target as HTMLInputElement);
    const parentNode = (target.parentNode as HTMLElement);
    this.item.title = target.value;
    parentNode.remove();
    this.target.innerHTML = this.item.title;
    parent.prepend(this.target);
    this.target.innerHTML = this.item.title;
    this.item.pubDate = new Date();
    this.rssFeedService.feed.items[this.rssFeedService.begin + this.index].title = this.item.title;
    this.rssFeedService.feed.items[this.rssFeedService.begin + this.index].pubDate = this.item.pubDate;
    
  }
  onDesciptionChange(event: Event) {
    this.target = event.target as HTMLElement
    const parent = (this.target.parentNode as HTMLElement);
    this.referentiel = (parent.lastElementChild as HTMLElement);
    console.log(parent);
    
    (event.target as HTMLElement).remove();
    const wrapper = document.createElement('div');
    wrapper.classList.add("form-group");
    const textArea = document.createElement("textarea");
    textArea.id = "exampleFormControlTextarea1"+this.index;
    textArea.rows = 3;
    textArea.className = "form-control";
    textArea.value = this.item.description;

    textArea.addEventListener("change", (event: Event) => {
      const target = (event.target as HTMLTextAreaElement);
        this.item.description = target.value;
    } );
    textArea.addEventListener("blur", (event: Event) => {
      this.onDescriptionBlur(event,parent);
    } );

    wrapper.appendChild(textArea);
    parent.insertBefore(wrapper,this.referentiel);
  }

  onDescriptionBlur(event: Event, parent: HTMLElement) {
    const target = (event.target as HTMLTextAreaElement);
    const parentNode = (target.parentNode as HTMLElement);
    this.item.description = target.value;
    parentNode.remove();
    this.target.innerHTML = this.item.description;
    parent.insertBefore(this.target,this.referentiel);
    this.target.innerHTML = this.item.description;
    this.item.pubDate = new Date();
    this.rssFeedService.feed.items[this.rssFeedService.begin + this.index].description = this.item.description;
    this.rssFeedService.feed.items[this.rssFeedService.begin + this.index].pubDate = this.item.pubDate;
  }
}
