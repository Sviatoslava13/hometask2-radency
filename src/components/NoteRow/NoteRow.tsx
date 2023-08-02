import { useDispatch } from "react-redux";

import { MdDelete, MdModeEdit, MdOutlineArchive } from "react-icons/md";

import { Note } from "../../redux/interface";
import { changeStatus, deleteNote } from "../../redux/notesSlice";
import { openModal } from "../../redux/formSlice";
import Icon from "../Icon/Icon";
import { Td, Tr } from "./NoteRow.styled";

interface NoteRowProps {
  note: Note;
}

const NoteRow: React.FC<NoteRowProps> = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <Tr>
      <Td>
        <Icon category={note.category} />
      </Td>
      <Td>{note.name}</Td>
      <Td>{note.created}</Td>
      <Td>{note.category}</Td>
      <Td>{note.content}</Td>
      <Td>{note.dates}</Td>
      <Td onClick={() => dispatch(openModal({ mode: "edit", id: note.id }))}>
        <MdModeEdit />
      </Td>
      <Td onClick={() => dispatch(changeStatus(note.id))}>
        <MdOutlineArchive />
      </Td>
      <Td onClick={() => dispatch(deleteNote(note.id))}>
        <MdDelete />
      </Td>
    </Tr>
  );
};

export default NoteRow;
