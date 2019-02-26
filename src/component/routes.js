import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './login'
import Home from './home'
import About from './about'
class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch> 
                    <Route exact path='/' component={Login} />
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;