import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/formSlice";
import NotesTable from "../NotesTable";
import { Form } from "../../components/Form/Form";

import { Button, Container } from "./MainPage.styled";
import CategoriesTable from "../CategoriesTable";
import ArchivedTable from "../ArchivedTable";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <NotesTable />
      <Button onClick={() => dispatch(openModal({ mode: "create", id: "" }))}>
        Create Note
      </Button>
      <Form />
      <CategoriesTable />
      <ArchivedTable/>
    </Container>
  );
};
export default MainPage;
