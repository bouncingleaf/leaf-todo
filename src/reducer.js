import { ADD_ITEM, TOGGLE_ITEM, DELETE_ITEM } from './actions';

// The reducer
export function toDoListReducer(state = {mylist: []}, action) {
  switch (action.type) {
    case ADD_ITEM:
      console.log('adding');
      return {
        ...state, 
        myList: [
          ...myList, 
          {
            id: action.id,
            name: action.name, 
            done: false
          }
        ]
      };
    case TOGGLE_ITEM:
      console.log('toggling');
      
      return {
        ...state,
        myList: myList.map(listItem => {
          listItem.id === action.id ? {
            ...listItem,
            done: !listItem.done
          } : listItem
        })
      }
    case DELETE_ITEM:
      console.log('deleting');
      
      return state;
    default:
      return state;
  }
}

