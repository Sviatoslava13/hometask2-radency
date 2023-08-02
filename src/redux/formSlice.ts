import { createSlice } from "@reduxjs/toolkit";
export type formMode = "create" | "edit";

interface formState {
  isOpen: boolean;
  mode: formMode;
  id: string;
}
const initialState: formState = {
  isOpen: false,
  mode: "create",
  id: "",
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.id = action.payload.id;
      state.mode = action.payload.mode;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = formSlice.actions;
export default formSlice.reducer;
