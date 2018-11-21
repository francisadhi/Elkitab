import React from 'react'
import '../Navbar/Navbar.css'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AppSearchBar from '../../molecules/Search'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, BrowserRouter } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import CardMedia from '@material-ui/core/CardMedia';
import { fetchbiblebab } from '../../../../actions/book'
import Route from 'react-router-dom/Route';

const styles = theme => ({
    root: {
      width: '100%',
      align: 'right',
      disableUnderline: true,
    },
    grow: {
      flexGrow: 1,
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
      width: '100%',
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
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });

class Navbar extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
      this.props.fetchbiblebab()
      // console.log(this.props.chapters)
  }
    state = {
        anchorEl: null,
      };

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };

      handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
      };

      handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
      };
    
      handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
      };

    renderVerses = () => {
      const { match } = this.props
      return (
        <h1>
          Test {match.params.id}
        </h1>
      )

    }

    render(){

    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >

          <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        </Menu>
      );

    const { classes, chapters } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const { anchorEl } = this.state;

    console.log(chapters)

    return (
            <div className={classes.root}>
            <AppBar position="static" color="primary">
            <Toolbar>
                <Link to={`/`}  style={{textDecoration: 'none', width: 300}} >
                <Typography variant="title" color="secondary">Elkotab</Typography>
                </Link>
            {/* <AppSearchBar /> */}
            <BrowserRouter>
            <div>
            {chapters.map(bible => (
              <div>
              <Link to={`/${bible.id}/${bible.id}/`}  style={{textDecoration: 'none', width: 300}} >
              <Typography variant="title" color="secondary">{bible.id}</Typography>
              </Link>

              <Route path={`/${bible.id}/:id`} component={this.renderVerses} />
              </div>
            )
            )}
            </div>
            </BrowserRouter>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>

            </Toolbar>
            </AppBar>
            {renderMenu}
            </div>
            )
            }
        }

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
    };

const mapStateToProps = (state) => {
    return {
      chapters:state.bibles.chapters,

    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchbiblebab: () => dispatch(fetchbiblebab()),

})

let Navbar2 = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default withStyles(styles)(Navbar2);