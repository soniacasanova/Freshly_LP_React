import './App.css';
import Hero from './pages/Hero';
import Items from './pages/Items';
import Visit from './pages/Visit';
import Subscribe from './pages/Subscribe';
import Footer from './pages/components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
  

function App() {
  return (
    <Router>
      <Hero/>
      <Items/>
      <Visit />
      <Subscribe />
      <Footer />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
