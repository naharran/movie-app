import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route  } from "react-router-dom" 
import MovieList from "./pages/MovieList";
import MovieForm from "./pages/MovieForm";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
            <Route path="/movies" element={<MovieList/>} />
            <Route path="add" element={<MovieForm/>}/>
            <Route path="edit/:id" element={<MovieForm/>}/>
            <Route path="/:movie" />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
