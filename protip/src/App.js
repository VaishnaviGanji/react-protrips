import React, {useState} from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import AddComponent from './components/AddComponent';
import ListComponent from './components/ListComponent'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  const [trips, setTrips] = useState('');
  const handleCallback = (childData) => {
    setTrips(childData)
  }
  return (
    <div className = 'App'>
      <Router>
        <div >
          <button>
            <Link to="/"><img src="https://img.icons8.com/metro/50/000000/home.png" alt="home-button" /></Link>
          </button>
          <button>
            <Link to="/add"><img src="https://img.icons8.com/ios/50/000000/calendar--v1.png" alt="add-trip-button" /></Link>
          </button>
          <button>
            <Link to="/list"><img src="https://img.icons8.com/pastel-glyph/50/000000/around-the-globe--v1.png" alt="all-trip-button" /></Link>
          </button>
        </div>
        <Switch>
          <Route exact path="/">
            <HomeComponent trips={trips} />
          </Route>
          <Route path="/add">
            <AddComponent initializeTripList={handleCallback} />
          </Route>
          <Route path="/list">
            <ListComponent trips={trips} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
