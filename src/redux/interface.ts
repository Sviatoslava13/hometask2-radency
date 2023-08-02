export interface Note {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  archived: boolean;
}
export interface CreateNoteActionPayload {
  name: string;
  category: string;
  content: string;
}
export interface UpdateNoteActionPayload {
  id: string;
  name: string;
  category: string;
  content: string;
}
export interface CategoryStatictic {
  name: string;
  active: number;
  archived: number;
}
