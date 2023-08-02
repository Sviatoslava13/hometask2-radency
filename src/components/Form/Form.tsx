import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getModalId,
  getModalIsOpen,
  getModalMode,
  getNote,
} from "../../redux/selectors";
import { createNote, updateNote } from "../../redux/notesSlice";
import { closeModal } from "../../redux/formSlice";
import {
  ButtonReset,
  ButtonSubmit,
  ContainerForm,
  Forma,
  Input,
  Label,
  Select,
  Textarea,
} from "./Form.styled";

export const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const isOpen = useSelector(getModalIsOpen);
  const mode = useSelector(getModalMode);
  const id = useSelector(getModalId);
  const note = useSelector(getNote(id));

  const dispatch = useDispatch();

  useEffect(() => {
    if(isOpen){
    if (mode === "edit" && note) {
      setName(note.name);
      setCategory(note.category);
      setContent(note.content);
    }}
  }, [note, mode, isOpen]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = { name, category: category || "Task", content };

    mode === "edit"
      ? dispatch(updateNote({ ...formData, id: id }))
      : dispatch(createNote({ ...formData }));

    resetForm();
  }

  function resetForm() {
    setCategory("");
    setContent("");
    setName("");
    dispatch(closeModal());
  }

  return (
    <>
      {isOpen && (
        <ContainerForm>
          <Forma onSubmit={handleSubmit}>
            <Label>
              Note name:
              <Input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Label>

            <Label>
              Choose category:
              <Select
                id="category"
                name="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
                <option value="Quote">Quote</option>
              </Select>
            </Label>
            <Label>
              Note content:
              <Textarea
                name="content"
                id="content"
                wrap="soft"
                maxLength={100}
                cols={40}
                rows={5}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></Textarea>
            </Label>
            <ButtonSubmit type="submit">Confirm</ButtonSubmit>
            <ButtonReset type="reset" onClick={resetForm}>
              Cancel
            </ButtonReset>
          </Forma>
        </ContainerForm>
      )}
    </>
  );
};
