import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  CardActions,
  Card,
  CardContent,
  CircularProgress,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Modal,
  Grid,
  Typography
} from '@material-ui/core'
import { connect } from 'react-redux'
import { fetchbibleverses, fetchbibleverse } from '../../../actions/book'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import DialogBible from './DialogBible';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    // margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
})


class Verses extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      stateChapter: this.props,
      stateVerses: this.props.verses,
    }
  }

  state = {
    open: false,
    expanded: null,
    expanded2: null,
    arr: [],
  };

  // componentWillMount(){
  //   // this.handleChange()
  //   // this.handleChange2()
  //   console.log('component will mount');
  // }

  // componentDidMount(){
  //   this.props.magicButton()
  //   this.props.magicButton2()
  //   console.log('component did mount');
  // }

  // componentWillReceiveProps(){
  //   console.log('component will receive props');
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('should component update')
  //   return true;
  // }

  // componentWillUpdate(){
  //   console.log('component will update');
  // }

  // componentWillUnmount(){

  //   console.log('component will unmount')
  // }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
    console.log(expanded)
  };

  handleChange2 = panel2 => (event, expanded2) => {
    this.setState({
      expanded2: expanded2 ? panel2 : false,
    });
  };

  componentWillMount(){
    console.log('parent component will mount');
  }

  componentDidMount(){
    // this.props.onclick();
    console.log('parent component did mount');
  }

  componentWillReceiveProps(nextProps){
    console.log('parent component will receive props');
    if (this.props !== nextProps) {
      this.setState(nextProps);
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('parent should component update')
    return true;
  }

  componentWillUpdate(){
    console.log('parent component will update');
  }

  componentWillUnmount(){
    // const { open, expanded,chapter } = this.state;
    // this.props.verses.verses = null
    // expanded = null
    console.log('parent component will unmount ')
  }

    onclick = (bibleid, chapterid) => {
      this.props.verses.verses.filter( bible => {
        return bibleid === chapterid 
        ? 
        this.setState({ayat2: bible}):
        null
      })
    }

  render(){
  const { classes, chapters, verses, ayat, chapter } = this.props;
  let { filterVerse, capter } = this.props;
  const { expanded,expanded2, ayat2 } = this.state;
  const bull = <span className={classes.bullet}>•</span>;
  console.log('Verses '+this.state.stateChapter.verses.verses)


  return (
      <div className={classes.root}>
      {this.state.stateChapter.chapter.map(chapter => (
      <ExpansionPanel key={chapter.id} expanded={expanded === chapter.id} onChange={this.handleChange(`${chapter.id}`)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} onClick={() => this.props.magicButton(`${chapter.bibleId}`,`${chapter.id}`)} Button>
          <Typography className={classes.heading}>Chapter {chapter.id}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails key={chapter.id}>
          {verses.verses.length <= 0 ? <CircularProgress /> :
            // {let filterVerse = verses.verses.filter(bible2 => (chapter.id === bible2.chapterId))}
            <div>
              {/* {verses.verses.filter(bible2 => ( 1 === bible2.chapterId ? 
                <div>Tets</div> : <div></div>
              ))} */}

              <Grid container spacing={40}>
              {verses.verses.map(verse => {
                return  <DialogBible verse={verse} />
              })}
              </Grid>
            </div>
          }

          {/* {verses.verses.filter(verse => 
            {
              return verse.id === chapter.id ?
              <div>Test</div>:<div>kosong</div>
            }
          )} */}
        </ExpansionPanelDetails >
      </ExpansionPanel>
      ))}   
      </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    chapters: state.bibles, 
    verses: state.bibles,
    ayat: state.bibles,
  }
}

const mapDispatchToProps = (dispatch) => ({
  magicButton: (bibleId, id) => dispatch(fetchbibleverses(bibleId, id)),
  // magicButton2: (bibleId, id) => dispatch(fetchbibleverse(bibleId, id)),
})

Verses.propTypes = {
  classes: PropTypes.object.isRequired,
};

Verses = connect(mapStateToProps, mapDispatchToProps)(Verses)

export default withStyles(styles)(Verses);