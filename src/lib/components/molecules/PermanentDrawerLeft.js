import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BrowserRouter,  Route } from 'react-router-dom';
import Verses from '../Bibles/Versers'
import { fetchbiblechapters, resetState } from '../../../actions/book'
import Detail from '../Bibles/Detail';
import DialogBible from '../Bibles/DialogBible';
import Versers from '../Bibles/Versers';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    // marginTop:65,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  constructor(){
    super()

  }
  
  state = {
    mobileOpen: false,
  };

  // componentWillMount(){
  //   // this.props.bibles()
  //   // this.props.verses()
  //     console.log('component will mount');
  //   }
  
  //   componentDidMount(){
  //     // this.props.magicButton()
  //     // this.props.magicButton2()
  //     console.log('component did mount');
  //   }
  
  //   componentWillReceiveProps(){
  //     console.log('component will receive props');
  //   }
  
  //   shouldComponentUpdate(nextProps, nextState){
  //     console.log('should component update')
  //     return true;
  //   }
  
  //   componentWillUpdate(){
  //     console.log('component will update');
  //   }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  Topics = () => {
    return (
      <h1>
        Topics
      </h1>
    )
  }
  Home = () => {
    return (
      <h1>
        Home
      </h1>
    )
  }

  Nav = () => {
    return (
      <div style={{width:1000, alignContent:'screenLeft'}}>
    <ul>
      <li><Link to='/bibledetail/' component={this.Home}>Home</Link></li>
      <li><Link to='/bibledetail/topics' component={this.Home}>Topics</Link></li>
    </ul>
    </div>
    )
  }

  render() {
    const { classes, theme, bibles, bible, verses, chapter } = this.props;

    console.log(chapter.chapters)

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <BrowserRouter>
        <List>
          {/* <ListItem button>
            <Link to={`/bibledetail/`}  style={{textDecoration: 'none'}} >
            <Avatar style={{backgroundColor: 'red'}}>Home
            </Avatar>
            <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to={`/bibledetail/topics`}  style={{textDecoration: 'none'}} >
            <Avatar style={{backgroundColor: 'red'}}>Home
            </Avatar>
            <ListItemText primary="Topics" />
            </Link>
          </ListItem> */}
          {bibles.books.map((bible, index) => (
            <Link to={`/bibledetail/verses/${bible.id}`}  style={{textDecoration: 'none'}} >
            <ListItem key={bible.name} onClick={() => this.props.magicButton(`${bible.bibleId}`,`${bible.id}`)} button>
              <Avatar style={{backgroundColor: 'red'}}>{bible.name[0].toUpperCase()}
              </Avatar>
              <ListItemText primary={bible.name} />
            </ListItem>
            </Link>
          ))}
        </List>
        </BrowserRouter>
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {bible.bibleDetail.name}
            </Typography>
            <div className={classes.grow} />
            <Link to={`/`}  style={{textDecoration: 'none', width: 200, color: 'white'}} >
            <IconButton
              aria-haspopup="true"
              color="inherit" onClick={() => this.props.buttoExitResetState()}
            >
              <ExitToApp />
            </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />      
          {/* <BrowserRouter> */}
          {/* <DialogBible /> */}
          <div>
            {/* <this.Nav /> */}
            {/* <Route path='/bibledetail/' component={this.Home} />
            <Route path='/bibledetail/topics' component={this.Topics} /> */}
          {chapter.chapters.length <= 0 ? <Detail bible={bible} /> :
            <Versers chapter={chapter.chapters}/>
            // <Route path={`/bibledetail/verses/:id`} component={Verses} />
          }
          </div>
          {/* </BrowserRouter> */}
          
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        bibles: state.bibles, 
        verses: state.bibles,
        bible: state.bibles,
        chapter: state.bibles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        magicButton: (bibleId, id) => dispatch(fetchbiblechapters(bibleId, id)),
        buttoExitResetState: () => dispatch(resetState()),
    }
  }

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

ResponsiveDrawer = connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer)

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);