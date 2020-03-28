import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveItem(name: string, description: string, price: number) {
    let item = new Item(name, price, description, true);
    console.log("saved item", item);
    // TODO: POST TO SERVER
    fetch('http://localhost:8080/api/items', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Success:', data);
    }).catch(function(error) {
      console.error('Error:', error);
    });
  }

}
