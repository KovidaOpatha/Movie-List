import MovieCard from "../components/MovieCard";   

function Home() {
    const movies = [
        {id: 1, title: "Jhon Wick", release_date: "2019"},
        {id: 2, title: "Avengers", release_date: "2018"},
        {id: 3, title: "F1", release_date: "2025"},
        {id: 4, title: "Fast and Furious", release_date: "2020"},
        {id: 5, title: "Avatar", release_date: "2021"},
    ]


    return (
        <div className = "home">
            <div className = "movie-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;