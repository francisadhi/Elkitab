import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { fetchbibleverse } from '../../../actions/book'
import { connect } from 'react-redux';
import axios from 'axios/index';


class ResponsiveDialog extends React.Component {

  constructor(props){
    super(props)

    this.state = { 
      bibles: [],
      data:[],
      open: false,
        // ...props,
    }
  }

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

  componentDidMount(){
    //   this.setState({open : this.props.open })
      console.log('kkkk'+ this.state.open)
    axios.get(`https://api.scripture.api.bible/v1/bibles/${this.props.verse.bibleId}/verses/${this.props.verse.id}`,{ headers: { 'api-key': '6203c1c09761df55ea32eac2b4f2b09f' } })
        .then(response => {
            this.setState({
                data: response.data.data,
            });
        });
    console.log('child component did mount'+this.state.data);
  }

  render() {
    const { fullScreen, close, verse, verseDetail, bibleDetail } = this.props;
    // const chapter = this.state
    const { data } = this.state
    let clickopen = this.props.open
    let onclose = this.props.close
    const regex = /(<([^>]+)>)/ig;
    // console.log('Data '+open)
    var striptags = require('striptags');

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={clickopen}
          onClose={onclose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.props.verse.id}</DialogTitle>
          <DialogContent>
            <DialogContentText>
                
              {striptags(this.state.data.content)}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClose={onclose} color="primary">
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      verseDetail: state.bibles, 
      bibleDetail:state.bibles
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