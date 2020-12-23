import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movies from './components/Movies';
import Header from './components/Header';
import Movie from './components/Movie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Movies />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
