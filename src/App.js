import './App.css';
import './Components/style.css';
import Meal from './Components/Meal';
import Recipe from './Components/Recipe';
import {Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
      <hr /> 
    <Footer/>
    </>
  )
}
export default App;

