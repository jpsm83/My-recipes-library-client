import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RecipeService from "../services/recipe.service";

const recipeService = new RecipeService();

export const fetchAsyncRecipes = createAsyncThunk(
  "recipes/fetchAsyncRecipes",
  async () => {
    const response = await recipeService.get();
    return response.data;
  }
);

const initialState = {
  allRecipes: [],
  recipeSearch: [],
  filterByCountry: "Any",
  filterByIngredients: "Any",
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setSearchHandle: (state, action) => {
      state.recipeSearch = action.payload;
    },
    setFilterCountry: (state, action) => {
      state.filterByCountry = action.payload;
    },
    setFilterIngredients: (state, action) => {
      state.filterByIngredients = action.payload;
    },
  },

  extraReducers: {
    // "pending", "fulfilled", "rejected" defined the life cicle of the function "fetchAsyncRecipes"
    [fetchAsyncRecipes.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncRecipes.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, allRecipes: payload };
    },
    [fetchAsyncRecipes.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

// those are actions exported that can be used anywhere
export const { setSearchHandle, setFilterCountry, setFilterIngredients } =
  recipesSlice.actions;

// The function below is called a selector and allows us to select a value from the state
export const getAllRecipes = (state) => state.recipes.allRecipes;
export const searchedRecipes = (state) => state.recipes.recipeSearch;
export const filteredByCountry = (state) => state.recipes.filterByCountry;
export const filteredByIngredients = (state) =>
  state.recipes.filterByIngredients;

export default recipesSlice.reducer;
