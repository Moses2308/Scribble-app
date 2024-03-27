import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Requester from "../Requester";

export default function Journal({ journalData, updateJournals }) {
  async function handleDelete() {
    await Requester.deleteJournal(journalData.id);
    updateJournals(await Requester.getJournals());
    return;
  }

  return (
    <Card style={{ width: "18rem" }} className="mx-3 my-3 px-0">
      <Card.Img
        variant="top"
        src={journalData.imgUrl}
        style={{ height: "15rem" }}
      />
      <Card.Body>
        <Card.Title>{journalData.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {journalData.author}
        </Card.Subtitle>
        <Button variant="primary">
          <Link
            to={`/journals/${journalData.id}`}
            className="text-light text-decoration-none"
          >
            Open Journal
          </Link>
        </Button>

        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

/* 
<Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
*/
