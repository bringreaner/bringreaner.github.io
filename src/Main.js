import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './Components/HomePage/HomePage';
import { About } from './Components/About/About';
import { default as Portfolio } from './Components/Portfolio/Portfolio';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/about' component={About} />
        </Switch>
    </Router>
)

export default Main;