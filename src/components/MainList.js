import React from 'react';
import { connect } from 'react-redux';

const MainList = () => (
  <li>what</li>
);

const mapStateToProps = (state, ownProps) => state;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(clickList(ownProps.id))
    }
  }
}

export const ConnectedMainList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainList)
