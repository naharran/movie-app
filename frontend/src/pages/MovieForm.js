

import {useFormik, Field} from "formik";


import { useMutation } from "@tanstack/react-query"


import {object, string, number} from "yup";
import axios from "axios"


const MovieForm = () => {
  
   const sendNewMovie = async(movieData) => {
        console.log("mutation called!")
        const movieSchema = {
            year: movieData.year,
            title: movieData.title,
            genre_ids: movieData.genreIds
        }
       const res = await axios.post("http://localhost:8000/movies", movieSchema)
       return res.data;
   }
   const mockGenres = [{id: 1, name:"Sci-fi"}, {id:2, name:"Comedy"}];


   const {data, error, mutate} = useMutation({mutationFn:(form) => sendNewMovie(form), invalidateQueries:['movies']});


   const movieForm = useFormik({
       initialValues:{
           title:"",
           year: null,
           genre_ids:[]
       },
       onSubmit: async(form) => {
           await mutate(form)
       },
       validationSchema: object({
           title: string().required("Title is required").min(2, "Title must be 2 chars minimum"),
           year: number().required("year is required")
       })
   })
   return <>
       <h1>Add Movie Form</h1>
       <form style={{display:"flex", flexDirection:"column", width:"20%", margin:"auto"}} onSubmit={movieForm.handleSubmit} >
           <div>
               <label>{"Title"}</label>
               <input name="title" type="text" onChange={movieForm.handleChange}/>
               {movieForm.errors.title && <div style={{color: 'red', fontSize:"10px"}}>
                               {movieForm.errors.title}
               </div>}
           </div>
               <div>
                   <label>{"Year"}</label>
                   <input name="year" type="text" onChange={movieForm.handleChange}/>
                   {movieForm.errors.year &&
                   <div style={{color: 'red', fontSize:"10px"}}>
                               {movieForm.errors.year}
               </div>
               }
           </div>


           {mockGenres.map((g) => (
               <label key={g.id}>
                   <input
                       type="checkbox"
                       name="genre_ids"
                       value={g.id}
                       onChange={movieForm.handleChange}
                       checked={movieForm.values?.genreIds?.includes(String(g.id))}
                   />
                   {g.name}
               </label>
           ))}
          


               <button disabled={!movieForm.isValid} type="submit">Submit</button>
       </form>
   </>
}


export default MovieForm



