import Header from './Header';
import Home from './Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MealSearch from './MealSearch';
import IndividualMeal from './IndividualMeal';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<MealSearch/>}/>
        <Route path="/meal/:id" element={<IndividualMeal />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
