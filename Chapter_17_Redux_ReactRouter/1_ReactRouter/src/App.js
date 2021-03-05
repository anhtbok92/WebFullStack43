import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/Menu';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Hiển thị danh sách Menu */}
                    <Menu />
                    {/* Hiển thị các component tương ứng với menu đó */}
                    <Switch>
                        { this.showContentMenu(routes) }
                    </Switch>
                </div>
            </Router>
        );
    }

    showContentMenu = (routes) => {
        var result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key={index} 
                        path={route.path} 
                        exact={route.exact} 
                        component={route.main} 
                    />
                );
            });
        }

        return result;
    }
}

export default App;