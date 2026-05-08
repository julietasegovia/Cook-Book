import Header from './Header';
import Home from './Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Home/>
    </Router>
  );
}

export default App;
