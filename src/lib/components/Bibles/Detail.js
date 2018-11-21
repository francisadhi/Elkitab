import React from 'react'
import { 
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
 }
 from '@material-ui/core'
 import { withStyles } from '@material-ui/core/styles';
 import PropTypes from 'prop-types';

const Detail = (props) => {
  return (
    <div>
      
      <Card>
      <CardContent className={props.classes.cardContent}>
        <Typography gutterBottom variant="h4" component="h2">
        {props.bible.bibleDetail.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h1">
        {props.bible.bibleDetail.nameLocal}
        </Typography>
        <Typography gutterBottom variant="h5" component="h1">
        {/* {props.bible.bibleDetail.countries.name} */}
        </Typography>
        <Typography gutterBottom variant="h5" component="h1">
        {/* {props.bible.bibleDetail.language.name} */}
        </Typography>
        <Typography gutterBottom component="p">
        copyright : {props.bible.bibleDetail.copyright}
        </Typography>
      </CardContent>
      
      </Card>
    </div>
  )
}

const style = theme => ({
  card: {
    marginTop: 50,
  },
  cardContent: {
    flexGrow: 1,
  },
})

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Detail)