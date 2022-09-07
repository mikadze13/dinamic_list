import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  baseUrl=environment.baseUrl
  constructor(private httpClient:HttpClient){}
  items: Item[] = [
    { description: 'ვივარჯიშო', done: true },
    { description: 'ვითამაშო ფეხბურთი', done: true },
    { description: 'ვუყურო ფილმს', done: false },
    { description: 'დავწერო კოდი', done: true },
    { description: 'გადავაყენო ვინდოუსი', done: false },
  ];

  addItem(newItemDesc: string) {
    this.httpClient.post(`${this.baseUrl}basic.json`,{
      description:newItemDesc,
      done:false
    }).subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }
  
  // delete item

  delteItem(index: number) {
    this.items.splice(index, 1);
  }

  // cross item
  finishItem(index:number){
    this.items[index].done=!this.items[index].done
  }
}
