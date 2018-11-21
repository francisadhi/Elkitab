import React from 'react'
import PropTypes from 'prop-types';
import { Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import SimpleSelect from '../../../elements/atoms/SimpleSelect';
import { fetchbibles } from '../../../../actions/book'

const styles = theme => ({
    root: {
      width: '100%',
      align: 'right',
    },
    grow: {
      // flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      // width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 500,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        // display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    button: {
      display: 'block',
      marginTop: theme.spacing.unit * 2,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
  });

class PrimarySearchAppBar extends React.Component {
    
    state = {
      age: '',
      open: false,
    };

    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = () => {
      this.setState({ open: false });
    };

    handleOpen = () => {
      this.setState({ open: true });
    };
    
    render(){
    const { classes, bibles } = this.props;
        return(
          <form >
              <div className={classes.root}>
              <Toolbar>
              <SimpleSelect />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onKeyPress={() => this.props.magicButton(`${this.state.age}`)}
                />
              </div>
              </Toolbar>
              </div>
          </form>
            
        )   
    }
}

const mapStateToProps = state => {
  return {
    bibles: state.bibles, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      magicButton: (bibleId, id) => dispatch(fetchbibles(bibleId, id))
  }
}

PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

PrimarySearchAppBar = connect(mapStateToProps, mapDispatchToProps)(PrimarySearchAppBar)

export default withStyles(styles)(PrimarySearchAppBar);