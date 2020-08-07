import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { Store } from '@ngrx/store';
import { ItemAdd } from '../../actions/item.actions';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  title = '';
  price: number;

  constructor(private store: Store<{items: Item[]}>) { }

  ngOnInit(): void {
  }

  AddItem() {
    if(this.title && this.price) {
      const newItem = new Item();
      newItem.title = this.title;
      newItem.price = this.price;
      this.store.dispatch(new ItemAdd(newItem));
    }
  }

}
