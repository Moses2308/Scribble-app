import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Requester from "../Requester";

export default function EditJournalForm({
  journalData,
  updateJournals,
  setEditMode,
  editMode,
}) {
  async function handleSubmit(event) {
    event.preventDefault();
    //prevent submitssion, get form values, make request to update, toggle edit state/.
    const updatedData = {
      author: event.target.newAuthor.value,
      name: event.target.newName.value,
      imgUrl: event.target.newImg.value,
    };
    //
    await Requester.patchJournal(updatedData, journalData.id);
    setEditMode(!editMode);
    updateJournals(await Requester.getJournals());
  }

  return (
    <Form className="mx-3 my-3" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicText">
        <Form.Label>Journal Author:</Form.Label>
        <Form.Control
          type="text"
          defaultValue={journalData.author}
          name="newAuthor"
        />
      </Form.Group>

      <Form.Group controlId="formBasicText" className="mt-1">
        <Form.Label>Journal Title</Form.Label>
        <Form.Control
          type="text"
          defaultValue={journalData.name}
          name="newName"
        />
      </Form.Group>

      <Form.Group controlId="formBasicText" className="mt-1">
        <Form.Label>Journal Img URL</Form.Label>
        <Form.Control
          type="text"
          defaultValue={journalData.imgUrl}
          name="newImg"
        />
      </Form.Group>
      <Button type="submit" className="mt-3">
        Submit Changes
      </Button>
      <Button
        type="button"
        className="mt-3"
        variant="warning"
        onClick={() => {
          setEditMode(!editMode);
        }}
      >
        Cancel
      </Button>
    </Form>
  );
}
