
import {useQuery} from "@tanstack/react-query"
import axios from 'axios'

const MovieList = () => {

    const getMovies = async() => {
        const {data } = await axios.get("http://localhost:8000/movies")
        console.log({data})
        return data;
    }

    const {data: movies, error, isLoading} = useQuery({
        queryKey:['movies'],
        queryFn: getMovies,
        staleTime: 50000
    })

    return <div>
        {movies?.map((mov, index) => {
            return  <div style={{border: "2px solid blue"}}>
            <h1 style={{color: "red", fontWeight:"300"}} key={index}>{mov.title}</h1>
            </div>
        })}
    </div>
}

export default MovieList