import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import {useState} from 'react'
import axios from "axios"

function AddMovie() {
    const [movieName, setMovieName] = useState("")
    const [movieYear, setMovieYear] = useState("")

    const addExampleMovie = () =>{
        const exampleMovie = {id:3, name:"Example movie", description:"This is the example movie description"}
        const res = axios.post('http://localhost:8000/movies', exampleMovie);
    }

  return (
    <>
        <input onChange={e => setMovieName(e.target.value)}/>
        <input onChange={e => setMovieYear(e.target.value)}/>

    <button onClick={addExampleMovie}>Add Example movie</button>    
    </>
  );
}

export default AddMovie;
