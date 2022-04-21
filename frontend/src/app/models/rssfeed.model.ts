import { Item } from "./item.model";
export interface RssFeed {
    length: number;
    copyright: string;
    language: string;
    link: string;
    pubDate: string;
    description: string;
    title: string;
    items: [Item];
}