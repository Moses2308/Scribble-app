import Journal from "../Journal";
import Requester from "../Requester";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function NewJournalForm({ updateJournals }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const authorName = event.target.elements[0].value;
    const journalName = event.target.elements[1].value;
    if (authorName === false || journalName === false) {
      return;
    }
    await Requester.postJounral(new Journal(authorName, journalName));
    event.target.reset();
    updateJournals(await Requester.getJournals());
  }

  return (
    <Container className="px-5 mt-3" onSubmit={handleSubmit}>
      <Form className="px-5 mx-5">
        <Form.Group controlId="formBasicText">
          <Form.Label>Journal Author:</Form.Label>
          <Form.Control required type="text" placeholder="Your Name Here" />
          <Form.Text className="text-muted">
            An amazing book written by your's truly!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicText" className="mt-3">
          <Form.Label>Journal Title</Form.Label>
          <Form.Control required type="text" placeholder="Book Title Here" />
          <Form.Text className="text-muted">
            An amazing book needs an amazing title!
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Create Journal
        </Button>
      </Form>
    </Container>
  );
}

/* 
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="journalAuthor">Journal Author: </label>
        <input
          type="text"
          placeholder=""
          id="journalAuthor"
          name="journalAuthor"
        />

        <label htmlFor="journalName">Journal Name: </label>
        <input type="text" placeholder="" id="journalName" name="journalName" />

        <button type="submit">Create</button>
        <button type="reset">Reset</button>
      </form>

*/
