import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { ItemRemove } from '../../actions/item.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: Observable<Item[]>;
  constructor(private store: Store<{items: Item[]}>) {
    store.pipe(select('items')).subscribe((values: any) => {
      this.items = values;
    });
  }

  ngOnInit(): void {
  }

  RemoveItem(idx: number) {
    this.store.dispatch(new ItemRemove(idx));
  }

}
