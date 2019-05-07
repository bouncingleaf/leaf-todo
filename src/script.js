import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// function newTodo() {
//   alert('New TODO button clicked!')
// }

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: [{
        id: Number,
        title: String,
        done: Boolean
      }],
    }
  }
  newTodo() {
    this.state.myList.push(
      {
        id: this.state.myList.length,
        title: 'New item',
        done: false
      }
    );
  }

  render() {
    if (this.state.myList.length > 0) {
      return (
        this.state.myList.map(listItem => {
          return (
            <li className={classNames.TODO_ITEM}
              key={listItem.id}>
              {listItem.title} - {listItem.done}
            </li>
          );
        })
      );
    } else {
      return (<span></span>);
    }
  }  
}

ReactDOM.render(<TodoList />, list);
