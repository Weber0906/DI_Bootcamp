import { useSelector} from 'react-redux';

const MovieDetails =  (props) => {
    const detail = useSelector(state =>state.reducer_detail.movie_details)

    return (
        <div style={{display:'inline-block', width:'50%'}}>
            <h1>Movie Details</h1>
            <h2>Title: {detail.title}</h2>
            <h2>Release date: {detail.releaseDate}</h2>
            <h2>Rating: {detail.rating}</h2>
        </div>
    )
}

export default MovieDetails