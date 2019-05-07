import React from 'react';
import { connect } from 'react-redux';

const ItemCount = () => <div>ItemCount</div>;

const mapStateToProps = (state, ownProps) => state;

export const ConnectedItemCount = connect(mapStateToProps)(ItemCount)
