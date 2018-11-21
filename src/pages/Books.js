import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, CardMedia } from '@material-ui/core';
import axios from 'axios'
import Section from '../lib/elements/atoms/Section'

class Books extends React.Component {
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
  
      return (
          <div>
            TEST
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

  Books.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Books)