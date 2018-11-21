import React from 'react'
import Section from '../../elements/atoms/Section';
import { 
    Avatar, 
    Button,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    CircularProgress,
    InputBase,
    List, 
    ListItem, 
    ListItemText, 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,Grid,
    DialogTitle, 
    Paper,
    Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchbibles } from '../../../actions/book'
import Slide from '@material-ui/core/Slide';
import { fetchbiblebooks, fetchbible } from '../../../actions/book'


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class BibleList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            search: "",
            bible: [],
            id: '2dd568eeff29fb3c-01',
        };
    }

    componentDidMount(){
        this.props.fetchbibles()
    }
      
    onchange = e => {
        this.setState({ search: e.target.value })
      }

    renderBible = bible => {
        const { classes } = this.props

        return <Grid item key={bible.id} sm={6} md={4} lg={3}>
            <Card className={classes.bible}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4" component="h2">
                {bible.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h1">
                {bible.nameLocal}
                </Typography>
            </CardContent>
            <CardActions>
            <Link to={`bibledetail`} style={{textDecoration: 'none'}}>
                <Button color="grey" onClick={() => this.props.magicButton(`${bible.id}`)}>
                Baca
                </Button>
            </Link>
            </CardActions>
            </Card>
        </Grid>
    }
    
    render() {
        const { bibles, bible, classes } = this.props
        const { search } = this.state
        const filteredBibles = bibles.filter( bible => {
            return bible.name.toLowerCase().indexOf( search.toLowerCase()) !== -1
        })
        return(
            <div>
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className={classes.search}>
                                <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={this.onchange}
                                />
                            </div>
                        </Paper>
                        </Grid>
                    </Grid>
                    
                    <Section title="Bibles">
                        {filteredBibles.length <= 0 ? <CircularProgress /> :
                            <Grid container spacing={40}>
                            {filteredBibles.map(bible => {
                                return this.renderBible(bible)
                                }
                            )}
                            </Grid>
                        }
                    </Section>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor: 'grey',
        marginTop: 10,
    },
    icon: {
      marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
      backgroundColor: theme.palette.background.paper,
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
      height: 200,
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '25px', // 16:9
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
        bibles:state.bibles.bibles,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchbibles: () => dispatch(fetchbibles()),
    magicButton: (bibleId) => dispatch(fetchbiblebooks(bibleId),fetchbible(bibleId)),
})

BibleList.propTypes = {
    classes: PropTypes.object.isRequired,
  };

BibleList = connect(mapStateToProps,mapDispatchToProps)(BibleList)

export default withStyles(styles)(BibleList)