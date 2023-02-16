import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';

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