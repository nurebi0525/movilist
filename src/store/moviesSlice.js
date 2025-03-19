import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const API_BASE_URL = "https://movies-eaf61-default-rtdb.firebaseio.com/movies.json";

export const getAllMovies = createAsyncThunk("movies/getAll", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(API_BASE_URL);
    return data ? Object.entries(data).map(([id, movie]) => ({ id, ...movie })) : [];
  } catch (error) {
    console.error(error.message);
    return rejectWithValue(error.message);
  }
});

export const addMovie = createAsyncThunk("movies/addMovie", async (movieData, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_BASE_URL, movieData);
    return { id: response.data.name, ...movieData };
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.message);
  }
});

export const deleteMovie = createAsyncThunk("movies/deleteMovie", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`https://movies-eaf61-default-rtdb.firebaseio.com/movies/${id}.json`);
    return id;
  } catch (error) {
    console.error(error);
    return rejectWithValue(error.message);
  }
});

export const toggleFavorite = createAsyncThunk(
  "movies/toggleFavorite",
  async ({ id, isFavorite }, { rejectWithValue }) => {
    try {
      await axios.patch(`https://movies-eaf61-default-rtdb.firebaseio.com/movies/${id}.json`, {
        isFavorite: !isFavorite,
      });
      return { id, isFavorite: !isFavorite };
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        const movie = state.movies.find((movie) => movie.id === action.payload.id);
        if (movie) movie.isFavorite = action.payload.isFavorite;
      })
      .addCase(toggleFavorite.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default moviesSlice.reducer;
