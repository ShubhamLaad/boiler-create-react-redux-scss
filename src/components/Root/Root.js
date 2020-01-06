import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class RootComponent extends PureComponent {
  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

RootComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

