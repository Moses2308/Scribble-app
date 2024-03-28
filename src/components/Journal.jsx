import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import Requester from "../Requester";
import EditJournalForm from "./EditJournalForm";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Journal({ journalData, updateJournals }) {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <Card
        style={{ width: "18rem", height: "fit-content" }}
        className="mx-3 my-3 px-0"
      >
        <Card.Img
          variant="top"
          src={journalData.imgUrl}
          style={{
            height: "15rem",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {editMode ? (
          <EditJournalForm
            {...{ journalData, updateJournals, setEditMode, editMode }}
          />
        ) : (
          <CardContent
            {...{ journalData, updateJournals, setEditMode, editMode }}
          />
        )}
      </Card>
    </>
  );
}

//THIS IS IS THE CARD BODY CONTENT
function CardContent({ journalData, updateJournals, setEditMode, editMode }) {
  async function handleDelete() {
    await Requester.deleteJournal(journalData.id);
    updateJournals(await Requester.getJournals());
    return;
  }

  return (
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
      <Button
        variant="warning"
        onClick={() => {
          setEditMode(!editMode);
        }}
      >
        Edit
      </Button>
    </Card.Body>
  );
}
