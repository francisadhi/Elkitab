import React from 'react'
import Link from 'react-router-dom/Link';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const Section = ({title, children, selectAll, classes}) => (
    <div style={{backgroundColor: 'transparent', padding:10, margin:5}}>
        <div className={classes.root}>
        <h2 style={{color: 'black'}}>{title}</h2>
        <div className={classes.grow} />
        <h2 style={{flexGrow: 1}}>
        <Link to={`Books/`}>{selectAll}</Link></h2>
        <div style = {{
            padding: 20,
        }}>
        {children}
        </div>
        </div>
    </div>
)

const styles = theme => ({
    root: {
      width: '100%',
      align: 'right',
      disableUnderline: true,
    },
    grow: {
      flexGrow: 1,
    },
}
)

Section.propTypes = {
    classes: PropTypes.object.isRequired,
    };

export default withStyles(styles)(Section)

