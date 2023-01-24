import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { MovieView } from "../movie-view/movie-view.jsx";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
      title: "Harry Potter and the Sorcerer\'s Stone",
      description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
      genre: "Adventure",
      director: "Chris Columbus"
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      title: "The Lord of the Rings",
      description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      genre: "Fantasy",
      director: "Peter Jackson"
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/b6/Twilight_%282008_film%29_poster.jpg",
      title: "Twilight",
      description: "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a vampire.",
      genre: "Romance",
      director: "Catherine Hardwicke"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => { setSelectedMovie(newSelectedMovie); }
          }
        />
      ))}
    </div>
  );


};