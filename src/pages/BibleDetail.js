import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
  Drawer, 
  Avatar, 
  Divider, 
  List, 
  ListItem, 
  ListItemText 
} from '@material-ui/core';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import PermanentDrawerLeft from '../lib/components/molecules/PermanentDrawerLeft';

const drawerWidth = 240;

class BibleDetail extends React.Component {
  constructor(props){
    super(props)
    
  }

    render() {
      const { app, classes, bibles } = this.props
  
      return  (
        <div>
          <PermanentDrawerLeft />
        </div>
      ) 
    }
  }

  const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    icon: {
      marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
      backgroundColor: theme.palette.background.paper,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      marginTop:65,
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
      marginTop: theme.spacing.unit * 4,
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    cardGrid: {
      padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 6,
    },
  });

const mapStateToProps = (state) => {
  return {
      app:state.app, 
      bibles: state.bibles, 
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchbible: () => dispatch(fetchbible())
// })

BibleDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

BibleDetail = connect(mapStateToProps)(BibleDetail)

export default withStyles(styles)(BibleDetail)