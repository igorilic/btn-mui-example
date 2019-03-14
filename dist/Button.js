import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import Button from '@material-ui/core/Button';
import withTheme from './theme';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

var styles = function styles(theme) {
  return {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
    }
  };
};

function MyButton(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className,
      otherProps = _objectWithoutProperties(props, ["classes", "children", "className"]);

  return React.createElement(Button, Object.assign({
    className: classNames(classes.root, className)
  }, otherProps), children);
}

export default withStyles(styles)(withTheme(MyButton));