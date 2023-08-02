import { RootState } from "./store";

export const getModal = (state: RootState) => state.form;
export const getModalId = (state: RootState) => state.form.id;
export const getModalMode = (state: RootState) => state.form.mode;
export const getModalIsOpen = (state: RootState) => state.form.isOpen;
export const getNotes = (state: RootState) => state.notes.notes;

export const getNote = (id: string) => (state: RootState) =>
  state.notes.notes.find((item) => item.id === id);
