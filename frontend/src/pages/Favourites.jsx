import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
        <div className="favorites">
            <h2>Your Favourite Movies</h2>
            <div className = "movie-grid">
                {favorites.map((movie) => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
         </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favourite Movies Yet</h2>
            <p>Click on the ❤️ button to add a movie to your favourites.</p>
        </div>
        );
}

export default Favourites;