import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import AddMovie from './AddMovie';
import MovieList from "./MovieList";

function App() {
  return (
    <div className="App">
      <h1>This is the navbar, its allways there</h1>
    <BrowserRouter>
      <Routes>
          <Route path='list' element={<MovieList/>}/>
          <Route path='add' element={<AddMovie/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
