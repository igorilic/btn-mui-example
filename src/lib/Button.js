import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import withTheme from './theme'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
})

function MyButton(props) {
  const { classes, children, className, ...otherProps } = props
  return (
    <Button className={classNames(classes.root, className)} {...otherProps}>
      {children}
    </Button>
  )
}

MyButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string, 
}

export default withStyles(styles)(withTheme(MyButton))