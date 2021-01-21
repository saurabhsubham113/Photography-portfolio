import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import NavBar from './components/NavBar/NavBar';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Fashion from './components/pages/Fashion/Fashion';
import Fitness from './components/pages/Fitness/Fitness';
import Home from './components/pages/Home/Home';
import Jewellery from './components/pages/Jewellery/Jewellery';
import Nature from './components/pages/Nature/Nature';
import ProfileColumn from './components/ProfleColumn/ProfileColumn';

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="profile-body">
        <ProfileColumn className="profile" />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/fashion" exact component={Fashion} />
          <Route path="/jewellery" exact component={Jewellery} />
          <Route path="/fitness" exact component={Fitness} />
          <Route path="/nature" exact component={Nature} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />

        </Switch>
      </div>
    </Router>
  )
}

