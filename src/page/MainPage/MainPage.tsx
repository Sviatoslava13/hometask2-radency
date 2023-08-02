import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/formSlice";
import NotesTable from "../NotesTable";
import { Form } from "../../components/Form/Form";

import { Button, Container } from "./MainPage.styled";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <NotesTable />
      <Button onClick={() => dispatch(openModal({ mode: "create", id: "" }))}>
        Create Note
      </Button>
      <Form />
    </Container>
  );
};
export default MainPage;
