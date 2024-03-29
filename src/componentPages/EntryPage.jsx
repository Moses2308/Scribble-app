import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageNavBar from "../components/PageNavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Requester from "../Requester";

export default function EntryPage() {
  const { journalId, entryId } = useParams();
  const [currJournal, setCurrJournal] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://localhost:5500/journals/${journalId}`
      );
      const data = await response.json();
      setCurrJournal(data);
    }

    getData();
  }, []);

  if (!currJournal) {
    console.log("mounting render : journal undefined");
    return;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // sets the current Journal's specific entry to the text in the form
    console.log(currJournal.entries[entryId].textContent);
    currJournal.entries[entryId].textContent = event.target.content.value;
    console.log(currJournal.entries[entryId].textContent);

    await Requester.patchJournal(currJournal, journalId);

    setCurrJournal(await Requester.getJournalbyId(journalId));
  }

  return (
    <>
      <PageNavBar />
      <Container className="text-center mt-5">
        <h1>Entry Page : {currJournal.entries[entryId].title}</h1>
      </Container>
      <Container>
        <Form className="mt-5 mx-auto text-center" onSubmit={handleSubmit}>
          <Form.Control
            style={{ minHeight: "15rem" }}
            as="textarea"
            placeholder="Write your entry here"
            className="mb-3"
            name="content"
            defaultValue={currJournal.entries[entryId].textContent}
          />
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Container>
    </>
  );
}
