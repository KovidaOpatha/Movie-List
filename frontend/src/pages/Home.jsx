import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react";
import { searchPopularMovies, getPopularMovies} from "../services/api";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies);
            } catch (err) {
                console.error("Error fetching popular movies:", err);
                setError("Failed to fetch popular movies. Please try again later.");
            }
                finally {
                    setLoading(false);
                }
            }

        loadPopularMovies();
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchQuery}`);
        setSearchQuery("Search for a movie...");
    }


    return (
        <div className = "home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for a movie..."
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className = "movie-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;