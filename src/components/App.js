import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';
import CreateBlog from './CreateBlog';
import UpdateBlog from './UpdateBlog';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={BlogList} />
                <Route path="/blog/:id" exact component={BlogDetail} />
                <Route path="/create" exact component={CreateBlog} />
                <Route path="/update/:id" exact component={UpdateBlog} />
            </Switch>
        </Router>
    );
}

export default App;
