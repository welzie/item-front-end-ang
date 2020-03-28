import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor() { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    fetch('http://localhost:8080/api/items').then(function(response) {
      response.json().then(function(json) {
        let refreshItems: Item[] = [];
        json.forEach(function(obj) {
          refreshItems.push(new Item(obj.name, obj.price, obj.description, obj.newItem))
        });
        this.items = refreshItems;
      }.bind(this));
    }.bind(this));
  }
}
