import Header from './Header';
import Home from './Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MealSearch from './MealSearch';
import IndividualMeal from './IndividualMeal';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<MealSearch/>}/>
        <Route path="/meal/:id" element={<IndividualMeal />} />
      </Routes>
    </Router>
  );
}

export default App;
