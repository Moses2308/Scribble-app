import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Entry from "../Entry";
import Requester from "../Requester";

export default function NewEntryForm({ currJournal, setCurrJournal }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const newEntry = new Entry(event.target.entryTitle.value);
    const updateData = {
      entries: currJournal.entries.concat(newEntry),
    };
    await Requester.patchJournal(updateData, currJournal.id);
    setCurrJournal(await Requester.getJournalbyId(currJournal.id));
  }

  return (
    <Container style={{ width: "40rem" }} className="mt-5">
      <h2></h2>
      <Form className="px-5 mx-5" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicText">
          <Form.Label>New Entry Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Your Name Here"
            name="entryTitle"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Create Entry
        </Button>
      </Form>
    </Container>
  );
}
