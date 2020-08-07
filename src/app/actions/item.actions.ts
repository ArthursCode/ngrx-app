import {Action} from '@ngrx/store';
import {ItemActionTypes} from '../shared/enum/item-action-types.enum';

export class ActionParent implements Action{
  type: any;
  payload: any;
}

export class ItemAdd implements ActionParent {
  type = ItemActionTypes.Add;
  constructor(public payload: any) {}
}

export class ItemRemove implements ActionParent {
  type = ItemActionTypes.Remove;
  constructor(public payload: any) {}
}
