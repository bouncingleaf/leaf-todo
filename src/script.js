import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ConnectedItemCount from './components/ItemCount';
import ConnectedMainList from './components/MainList';
import ConnectedNewItemButton from './components/NewItemButton';
import ConnectedUncheckedCount from './components/UncheckedCount';

import './actions';
import { toDoListReducer } from './reducer';
import './styles.css';

const store = createStore(toDoListReducer);

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const button = document.getElementById('button');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedMainList />
  </Provider>, list);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedNewItemButton />
  </Provider>, button);
ReactDOM.render(
  <Provider store={store}>
  <ConnectedItemCount />
  </Provider>, itemCountSpan);
ReactDOM.render(
  <Provider store={store}>
  <ConnectedUncheckedCount />
  </Provider>, uncheckedCountSpan)