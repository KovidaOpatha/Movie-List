import MovieCard from "../components/MovieCard";
import {useState} from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Jhon Wick", release_date: "2019"},
        {id: 2, title: "Avengers", release_date: "2018"},
        {id: 3, title: "F1", release_date: "2025"},
        {id: 4, title: "Fast and Furious", release_date: "2020"},
        {id: 5, title: "Avatar", release_date: "2021"},
    ]

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