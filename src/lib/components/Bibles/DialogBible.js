import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { fetchbibleverse } from '../../../actions/book'
import { connect } from 'react-redux';
import DetailDialog from './DetailDialog';


class ResponsiveDialog extends React.Component {

  constructor(props){
    super(props)

    this.state = { 
      bibles: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
  }
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  myFunction = () => (
    this.handleClickOpen(),
    this.props.onclick()
  )

  handleClick = () => {
    this.handleClickOpen()
    this.props.onclick();
 }

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillMount(){
    
    console.log('child component will mount');
  }

  componentDidMount(){
    // this.props.onclick();
    console.log('child component did mount');
  }

  componentWillReceiveProps(){
    console.log('child component will receive props');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('child should component update')
    return true;
  }

  componentWillUpdate(){
    console.log('child component will update');
  }

  render() {
    const { fullScreen, verse, verseDetail, bibleDetail } = this.props;

    return (
      <div>
        <Grid item key={verse.id} sm={6} md={4} lg={3}>
        <Button 
        onClick={this.handleClickOpen}
        >Verse {verse.id}</Button>
        <DetailDialog open={this.state.open} close={this.handleClose} bibleDetail={this.props.verseDetail.bibleDetail} verse={verse}/>
        
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      verseDetail: state.bibles, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onclick: (bibleId, id) => dispatch(fetchbibleverse(bibleId, id)),
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

ResponsiveDialog = connect(mapStateToProps, mapDispatchToProps)(ResponsiveDialog)

export default withMobileDialog()(ResponsiveDialog);