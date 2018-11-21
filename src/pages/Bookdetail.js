import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar, CircularProgress, CardMedia } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux'
import Section from '../lib/elements/atoms/Section'
import { fetchbook } from '../actions/book'

class Bookdetail extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        userData: null
      }
    }
  
    componentDidMount() {
      const { match } = this.props
      axios.get(`https://www.googleapis.com/books/v1/volumes/${match.params.id}`)
        .then( ({ data }) => {
          this.setState({
            userData: data
          })
        })
    }
    
    render() {
      const { userData } = this.state
      const { classes } = this.props
  
      return userData ? (
        <React.Fragment>
                 <Section title="Detail">
                <Card>
                  <CardMedia
                    className={classes.media}
                    // image={book.volumeInfo.imageLinks.thumbnail}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {userData.volumeInfo.title}
                    </Typography>
                    <Typography gutterBottom component="h4">
                      {userData.volumeInfo.authors[0]}
                    </Typography>
                    <Typography component="p">
                      {userData.volumeInfo.description}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {userData.saleInfo.retailPrice && userData.saleInfo.retailPrice.amount}
                    </Typography>
                  </CardContent>
                </Card>
                </Section>
            </React.Fragment>
      ) : <CircularProgress />
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

  Bookdetail.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Bookdetail)