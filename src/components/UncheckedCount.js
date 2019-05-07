import React from 'react';
import { connect } from 'react-redux';

const UncheckedCount = () => <div>UncheckedCount</div>;

const mapStateToProps = (state, ownProps) => state;

export const ConnectedUncheckedCount = connect(mapStateToProps)(UncheckedCount)
