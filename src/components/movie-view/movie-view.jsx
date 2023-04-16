<<<<<<< Updated upstream
import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
=======
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./movie-view.scss";
import { FavMovies } from "./../profile-view/fav-movies";


export const MovieView = ({ movies, username, favoriteMovies }) => {
  const storedToken = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

  const [movieExists, setMovieExists] = useState(false);
  const [disableRemove, setDisableRemove] = useState(true)
  const [userFavoriteMovies, setUserFavoriteMovies] = useState(storedUser.FavoriteMovies ? storedUser.FavoriteMovies : favoriteMovies);

  console.log(username)

  // AddFavMovie
  const addFavoriteMovie = async () => {
    const favoriteMovie = await fetch(`https://movie-site.herokuapp.com/users/${username}/movies/${movieId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "application/json",
        }
      })

    console.log(storedToken)

    const response = await favoriteMovie.json()
    setUserFavoriteMovies(response.FavoriteMovies)
    if (response) {
      alert("Movie added to favorites");
      localStorage.setItem("user", JSON.stringify(response))
      window.location.reload();
    } else {
      alert("Something went wrong");
    }
  };

  const removeFavoriteMovie = async () => {
    const favoriteMovie = await fetch(`https://movie-site.herokuapp.com/users/${username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "application/json"
        }
      })
    const response = await favoriteMovie.json()
    console.log(response)
    if (response) {
      alert("Movie removed from favorites");
      localStorage.setItem("user", JSON.stringify(response))
      window.location.reload();
    } else {
      alert("Something went wrong");
    }
  };

  const movieAdded = () => {
    const hasMovie = userFavoriteMovies.some((m) => m === movieId)
    console.log("userFavMov", userFavoriteMovies)
    console.log("movieId", movieId)
    if (hasMovie) {
      setMovieExists(true)
    }
  };

  const movieRemoved = () => {
    const hasMovie = userFavoriteMovies.some((m) => m === movieId)
    if (hasMovie) {
      setDisableRemove(false)
    }
  };

  console.log("movieExists", movieExists)

  useEffect(() => {
    movieAdded()
    movieRemoved()
  }, [])
>>>>>>> Stashed changes

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Container>
      <Row>
        <Col>
          <img className="w-100" src={movie.image} alt={`Poster for ${movie.title}`} />
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Title: </span>
          <span>{movie.title}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Description: </span>
          <span>{movie.description}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Genre: </span>
          <span>{movie.genre}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Director: </span>
          <span>{movie.director}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={onBackClick}>Back</Button>
        </Col>
      </Row>
    </Container>
  );
};