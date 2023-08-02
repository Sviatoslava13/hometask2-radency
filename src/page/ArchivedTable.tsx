import React from "react";
import { useSelector } from "react-redux";
import { getNotes } from "../redux/selectors";
import Table, { TableColumn } from "../components/Table/Table";
import { Note } from "../redux/interface";
import ArchivedRow from "../components/ArchivedRow/ArchivedRow";
import { MdOutlineUnarchive } from "react-icons/md";
const ArchivedTable: React.FC = () => {
  const notes = useSelector(getNotes);
  const archive = notes.filter((el) => el.archived);
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
      title: <MdOutlineUnarchive />,
    },
  ];
  return (
    <Table
      columns={columns}
      data={archive}
      renderRow={(el: Note) => <ArchivedRow key={el.id} note={el} />}
    />
  );
};
export default ArchivedTable;
