import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

// const style = {
//   marginRight: 90,
//   backgroundColor: 'black',
//   color: 'white'
// };


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

// class Button extends React.Component {
//     render() {
//       const { color } = this.props
  
//       const buttonStyle = {
//         backgroundColor: color,
//         color: 'white',
//         padding:10,
//         margin:5,
//       }
  
//       return (
//         <button
//           {...this.props}
//           style={buttonStyle}
//         />
//       )
//     }
//   }
function myButton(props) {
  const { classes, children } = props;
  return (
    <div>
      {/* <Button className={classes.button}>{children}</Button> */}
      <Button variant="outlined" color="primary" className={classes.button}>
        Default
      </Button>
    </div>
  )
}

myButton.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(myButton)