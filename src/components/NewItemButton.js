import React from 'react';
import { connect } from 'react-redux';

const NewItemButton = () => (
  <button
    className="button center"
    onClick={newTodo()}>
      New Item
  </button>
);

const mapStateToProps = (state, ownProps) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(clickAddButton(ownProps.id))
    }
  }
}

export const ConnectedNewItemButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItemButton)



