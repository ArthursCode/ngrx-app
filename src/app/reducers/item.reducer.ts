import {ItemActionTypes} from '../shared/enum/item-action-types.enum';
import {ActionParent} from '../actions/item.actions';
import {Item} from '../models/Item';

export const initialState: Item[] = [
  {title: 'Apple', price: 15},
  {title: 'Orange', price: 30},
  {title: 'Pear', price: 20}
];

export function ItemReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    case ItemActionTypes.Add:
      return [...state, action.payload];
    case ItemActionTypes.Remove:
      const arr = [...state];
      arr.splice(action.payload, 1);
      return arr;
    default: return state;
  }
}
