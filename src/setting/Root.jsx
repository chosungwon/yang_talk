import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from '../components/Main/Main';
import Chat from '../components/Chat/Chat';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';


class Root extends Component{
    render() {
        return (
            <Router>
                <Fragment>
                    <Route exact={true} path={'/'} component={Main}/>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/register'} component={Register}/>
                    <Route path={'/Chat'} component={Chat}/>
                </Fragment>
            </Router>
        );
    }
}

export default Root;