import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CreateNoteActionPayload,
  Note,
  UpdateNoteActionPayload,
} from "./interface";
import { data } from "./data";
import { formatCreatedDate, formatDates } from "./formatDate";
import { nanoid } from "nanoid";

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: data,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote(state, action: PayloadAction<CreateNoteActionPayload>) {
      const newNote: Note = {
        id: nanoid(),
        created: formatCreatedDate(),
        dates: formatDates(action.payload.content),
        archived: false,
        ...action.payload,
      };
      state.notes.push(newNote);
    },
    changeStatus(state, action: PayloadAction<string>) {
      const note = state.notes.find((note: any) => note.id === action.payload);

      if (note) {
        note.archived = !note.archived;
      }
    },
    deleteNote(state: any, action: PayloadAction<string>) {
      state.notes = state.notes.filter((el: any) => el.id !== action.payload);
    },
    updateNote(state, action: PayloadAction<UpdateNoteActionPayload>) {
      const note = state.notes.find((item) => item.id === action.payload.id);
      if (note) {
        note.name = action.payload.name;
        note.category = action.payload.category;
        note.content = action.payload.content;
        note.dates = formatDates(note.content);
      }
    },
  },
});
export const { deleteNote, createNote, updateNote, changeStatus } =
  notesSlice.actions;
export default notesSlice.reducer;
