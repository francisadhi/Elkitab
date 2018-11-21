import React from 'react'
import '../Footer/Footer.css'
import { connect } from 'react-redux'

const Footer = (props) => (
            <div>
            <hr></hr>
            <div className="Footer">
                {props.app.copyRight}
            </div>
            </div>
)

const mapStateToProps = (state) => {
    return {
        app:state.app, 
    }
}

export default connect(mapStateToProps)(Footer)