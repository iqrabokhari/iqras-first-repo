import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//trending for home
export const getAllData = createAsyncThunk("data", async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d203617d3c944ab5ad4ecd0b430570c1"
    );
    const datafetch = await response.json();
    return datafetch.articles;
  } catch (error) {
    throw new Error("error in getting news data");
  }
});
//bitcoin
export const bitCoin = createAsyncThunk("data", async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d203617d3c944ab5ad4ecd0b430570c1"
    );
    const datafetch = await response.json();
    return datafetch.articles;
  } catch (error) {
    throw new Error("error in getting news data");
  }
});

//tech
export const techno = createAsyncThunk("data", async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=d203617d3c944ab5ad4ecd0b430570c1"
    );
    const datafetch = await response.json();
    return datafetch.articles;
  } catch (error) {
    throw new Error("error in getting news data");
  }
});

//business
export const Businessnews = createAsyncThunk("data", async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=business&apiKey=d203617d3c944ab5ad4ecd0b430570c1"
    );
    const datafetch = await response.json();
    return datafetch.articles;
  } catch (error) {
    throw new Error("error in getting news data");
  }
});


//sports
export const Sportsnews = createAsyncThunk("data", async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=sports&apiKey=d203617d3c944ab5ad4ecd0b430570c1"
    );
    const datafetch = await response.json();
    return datafetch.articles;
  } catch (error) {
    throw new Error("error in getting news data");
  }
});




const newsDataSlice = createSlice({
  name: "newsData",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Assuming you want to store the error message
      });
  },
});

export default newsDataSlice.reducer;
