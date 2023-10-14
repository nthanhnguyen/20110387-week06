import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'; // Đây là import biến App ban đầu
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './components/BlogList'; // import your BlogList component
import BlogDetail from './components/BlogDetail'; // import your BlogDetail component
import CreateBlog from './components/CreateBlog'; // import your CreateBlog component
import UpdateBlog from './components/UpdateBlog'; // import your UpdateBlog component
import NotFound from './components/NotFound'; // import a NotFound component for 404 errors

// Đổi tên biến App ở đây
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BlogList} />
        <Route path="/blog/create" component={CreateBlog} />
        <Route path="/blog/update/:id" component={UpdateBlog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
