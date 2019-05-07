let nextId = 0;

// Working with the REDUX store
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (name, id) => {
  return {
    type: ADD_ITEM,
    id: nextId++,
    name
  }
};

export const toggleItem = (id) => {
  return {
    type: TOGGLE_ITEM,
    id
  }
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
};