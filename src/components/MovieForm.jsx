import { useState } from "react";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/moviesSlice";

export const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const titleValue = (e) => {
    setTitle(e.target.value);
  };
  const ratingValue = (e) => {
    setRating(e.target.value);
  };
  const imageValue = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && image.trim() && rating > 0) {
      const data = {
        title,
        rating,
        image,
        isFavorite,
      };
      dispatch(addMovie(data));
    }

    setTitle("");
    setImage("");
    setRating(0);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Title: <br />
        <Input
          type="text"
          value={title}
          onChange={titleValue}
          placeholder="Movie Name"
        />
      </label>

      <label>
        Rating: <br />
        <Input
          type="number"
          value={rating}
          onChange={ratingValue}
          placeholder="Movie Rating"
        />
      </label>

      <label>
        Image: <br />
        <Input
          type="text"
          value={image}
          onChange={imageValue}
          placeholder="Movie Image"
        />
      </label>

      <Button type="submit">+ Add</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;
