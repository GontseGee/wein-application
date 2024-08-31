import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  ArtisanDashboard from './Components/ArtisanDashboard';
import  Auth from './Components/Auth';
import  Homepage from './Components/Homepage';
import Payment from './Components/Payment';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Define routes for the different components */}
          <Route exact path="/" component={Homepage} />
          <Route path="/auth" component={Auth} />
          <Route path="/artisan-dashboard" component={ArtisanDashboard} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;