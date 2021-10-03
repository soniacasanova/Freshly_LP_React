import './App.css';
import Hero from './pages/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
  

function App() {
  return (
    <Router>
      <Hero/>
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
