import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';

export default function Button(props) {
  return (
    <TouchableHighlight>
      {props.children}
    </TouchableHighlight>
    );
}