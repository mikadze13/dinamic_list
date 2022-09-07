import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemsService } from './items.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private itemsServie:ItemsService) {}
  title = 'lesson1';
  // Interface
 items!:Item[];
 ngOnInit(){
  this.items=this.itemsServie.items
 } 
}

