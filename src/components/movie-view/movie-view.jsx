import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

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
          <Link to={`/`}>
            <button className="back-button">Back</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};