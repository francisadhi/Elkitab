import React from 'react'
// import Popular from '../lib/components/organisms/Popular'
import Carousell from '../lib/components/molecules/Carousel'
import Bibles from '../lib/components/Bibles'

class Home extends React.Component {

    render() {
        return (
            <div>          
                {/* <Carousell /> */}
                {/* <Popular /> */}
                <Bibles />
            </div>
        )
    }
}

export default Home