import { MdOutlineUnarchive } from "react-icons/md";
import Icon from "../Icon/Icon";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../redux/notesSlice";
import { Note } from "../../redux/interface";
import { Td, Tr } from "../NoteRow/NoteRow.styled";

interface ArchivedRowProps {
  note: Note;
}

const ArchivedRow: React.FC<ArchivedRowProps> = ({ note }) => {
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
      <Td onClick={() => dispatch(changeStatus(note.id))}>
        <MdOutlineUnarchive />
      </Td>
    </Tr>
  );
};
export default ArchivedRow;
