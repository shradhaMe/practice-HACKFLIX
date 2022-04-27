import './App.css';
import Catalogue from './Catalogue';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';


const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Catalogue />} />
      <Route path="/:movieID" element={<MovieDetails />} />
    </Routes>
  );
}


export default App;
