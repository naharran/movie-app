
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
            return <h1 key={index}>{mov.title}</h1>
        })}
    </div>
}

export default MovieList