import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, getAllMovies, toggleFavorite } from "../store/moviesSlice";
import { Button } from "./UI/Button";
import styled from "styled-components";

export const MovieList = () => {
  const { movies, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  const handleToggleFav = (id, isFavorite) => {
    dispatch(toggleFavorite({ id, isFavorite }));
  };

  return (
    <StyledDiv>
      {movies.map(({ title, id, image, rating, isFavorite }) => (
        <Block key={id}>
          <img src={image} alt={title} width="200px" />
          <h1>Title: {title}</h1>
          <h3>Rating: {rating}</h3>
          <Button onClick={() => handleDelete(id)}>Delete</Button>
          <Button onClick={() => handleToggleFav(id, isFavorite)}>
            {isFavorite ? "🧡" : "❤"}
          </Button>
        </Block>
      ))}
    </StyledDiv>
  );
};

const StyledDiv =styled.div`
    display: flex;
    margin: 100px;
    gap: 20px;
`
const Block = styled.div`
    color: #757575;
    width: 200px;
    height: 250px;

`
