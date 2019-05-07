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
    return <span>
      <span className="glyphicon glyphicon-envelope"></span>
      Unchecked count: {this.props.count}</span>;
  }
}

class AddNewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.click(this.state.value);
    this.setState({value: ''});
  }
  render() {
    return (
      <form
        className="form-inline mt-4"
        onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="newTodoName"
          value={this.state.value} onChange={(event) => this.handleChange(event)}/>
        <button type="submit" className="btn btn-primary mb-2">Add New ToDo</button>
      </form>
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
            key={item.id}
            item={item}
            clickToggle={(id) => this.toggleItem(id)}
            clickDelete={(id) => this.deleteItem(id)}
          />
        ))}  
      </ul>
    );
  }
};

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }
  render() {
    return (
      <li className={classNames.TODO_ITEM}>
        <i className={this.props.item.done ?
          'fas fa-check todo-icon todo-green' :
          'fas fa-check todo-icon todo-gray'}
          onClick={() => this.props.clickToggle(this.props.item.id)}>
        </i>
        <span className={classNames.TODO_TEXT}>{this.props.item.name}</span>
        <i className="fas fa-times todo-icon todo-delete"
          onClick={() => this.props.clickDelete(this.props.item.id)}>
        </i>
      </li>
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
  addNew(text) {    
    const list = [...this.state.myList, 
      {
        name: text || 'New item',
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
          <ItemCount count={this.state.myList.length} />
          <UncheckedCount count={this.state.myList.filter(item => !item.done).length} />
        </div>
        <AddNewItem click={(e) => this.addNew(e)} />
        <MainList 
          items={this.state.myList}
          delete={(id) => this.deleteItem(id)}
          toggle={(id) => this.toggleItem(id)} />
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));