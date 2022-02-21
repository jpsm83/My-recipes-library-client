import { configureStore } from "@reduxjs/toolkit";
import recipesReducers from "../features/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducers,
  },
});
