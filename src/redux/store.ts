import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notesSlice";
import formSlice from "./formSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
    form: formSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;