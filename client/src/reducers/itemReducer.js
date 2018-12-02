import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initalState = {
  items: [
    {id: uuid(), name: 'eggs'},
    {id: uuid(), name: 'milk'},
    {id: uuid(), name: 'bread'},
    {id: uuid(), name: 'candy'}
  ]
}

export default function(state = initalState, action){
  switch(action.type){
    case GET_ITEMS:
    return {
      ...state
    };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
      case ADD_ITEM:
        return {
          ...state,
          items: [action.payload, ...state.items]
        }
    default:
    return state;
  }
}
