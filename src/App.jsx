import Header from './Header';
import Home from './Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MealSearch from './MealSearch';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<MealSearch/>}/>
      </Routes>
    </Router>
  );
}

export default App;
