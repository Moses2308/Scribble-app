import Jounral from "../Journal";
import Requester from "../Requester";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function NewJournalForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const journalName = event.target.journalName.value;
    const journalAuthor = event.target.journalAuthor.value;
    if (journalName === false || journalAuthor === false) {
      return;
    }

    event.target.reset();
    await Requester.postJounral(new Jounral(journalAuthor, journalName));
  }

  return (
    <Container className="px-5">
      <Form className="px-5 mx-5">
        <Form.Group controlId="formBasicText">
          <Form.Label>Journal Author:</Form.Label>
          <Form.Control type="text" placeholder="Your Name Here" />
          <Form.Text className="text-muted">
            An amazing book written by your's truly!
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Journal Title</Form.Label>
          <Form.Control type="text" placeholder="Book Title Here" />
          <Form.Text className="text-muted">
            An amazing book needs an amazing title!
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
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
