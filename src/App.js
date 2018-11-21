import React, { Component } from 'react';
import Navbar2 from './lib/components/organisms/Navbar/navbar2'
import Footer from './lib/components/organisms/Footer'
import { Provider } from 'react-redux'
import myStore from './config/store'
import {  BrowserRouter,  Route } from 'react-router-dom';
import Home from './pages/Home'
import Bookdetail from './pages/Bookdetail'
import Books from './pages/Books'
import BibleDetail from './pages/BibleDetail';
import Detail from './lib/components/Bibles/Detail';
import Verses from './lib/components/Bibles/Versers'

class App extends React.Component {
    render(){
        return (
            <Provider store={myStore}>
                <BrowserRouter>
                <div>
                <Navbar2 />
                <div style={{ paddingLeft:16, paddingRight:16}}>
                    <Route exact path="/" render={() => (
                        <Home/>
                    )} />
                    <Route path="/bookdetail/:id" component={Bookdetail}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/books" component={Books}/>
                    <Route path="/bibledetail" component={BibleDetail}/>
                    {/* <Route path="/bibledetail/verses/:id" component={Verses}/> */}
                </div>
                <Footer />
                </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App

