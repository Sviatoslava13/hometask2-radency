import React from "react";
import { getNotes } from "../redux/selectors";
import { useSelector } from "react-redux";
import Table, { TableColumn } from "../components/Table/Table";
import { Note } from "../redux/interface";
import NoteRow from "../components/NoteRow/NoteRow";
import { MdDelete, MdModeEdit, MdOutlineArchive } from "react-icons/md";

const NotesTable: React.FC = () => {
  const notes = useSelector(getNotes);
  const active = notes.filter((el) => !el.archived);

  const columns: TableColumn[] = [
    {
      id: "1",
      title: "",
    },
    {
      id: "2",
      title: "Name",
    },
    {
      id: "3",
      title: "Created",
    },
    {
      id: "4",
      title: "Category",
    },
    {
      id: "5",
      title: "Content",
    },
    {
      id: "6",
      title: "Dates",
    },
    {
      id: "7",
      title: <MdModeEdit />,
    },
    {
      id: "8",
      title: <MdOutlineArchive />,
    },
    {
      id: "9",
      title: <MdDelete />,
    },
  ];

  return (
    <Table
      columns={columns}
      data={active}
      renderRow={(el: Note) => <NoteRow key={el.id} note={el} />}
    />
  );
};
export default NotesTable;
