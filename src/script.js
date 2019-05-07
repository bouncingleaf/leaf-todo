import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

class ItemCount extends React.Component {
  render() {
    return <span>Item count: {this.props.count}</span>
  }
}

class UncheckedCount extends React.Component {
  render() {
    return <span>Unchecked count: 321</span>;
  }
}

class AddButton extends React.Component {
  render() {
    return (
      <button className="button center" onClick={() => this.props.click()}>
        New TODO
      </button>
    );
  }
}

class MainList extends React.Component {
  deleteItem(id) {
    this.props.delete(id);
  }
  toggleItem(id) {
    this.props.toggle(id);
  }
  render() {
    return (
      <ul className="todo-list">
        {this.props.items.map(item => (
          <ListItem 
            className={TODO_ITEM}
            key={item.id}
            item={item}
            clickDelete={(id) => this.deleteItem(id)}
          />
        ))}  
      </ul>
    );
  }
};

class ListItem extends React.Component {
  render() {
    return (
      <span>
        <span className={TODO_TEXT}>{this.props.item.name}</span>
        <span>{this.props.item.done ? ' -- Complete!' : ''}</span>
        <button onClick={() => this.props.clickToggle(this.props.item.id)}>
          {this.props.item.done ? 'Re-open' : 'Complete'}
        </button>
        <button onClick={() => this.props.clickDelete(this.props.item.id)}>
          Delete
        </button>
      </span>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: []
    }
  }
  addNew() {
    const list = [...this.state.myList, 
      {
        name: 'New item',
        id: this.state.myList.length,
        done: false
      }
    ];
    this.setState({myList: list});
  }
  deleteItem(id) {
    const list = this.state.myList.filter(item => item.id !== id);
    this.setState({myList: list});
  }
  toggleItem(id) {
    const list = this.state.myList.map(item => item.id === id ? {...item, done: !item.done} : item);
    this.setState({myList: list});
  }
  render() {
    return (
      <>
        <div className="flow-right controls">
          <ItemCount count={myItems.length} />
          <UncheckedCount />
        </div>
        <AddButton click={() => this.addNew()} />
        <MainList 
          items={this.state.myList}
          delete={(id) => this.deleteItem(id)}
          toggle={(id) => this.toggleItem(id)} />
      </>
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(<Main />, root);