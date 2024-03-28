import PageNavBar from "../components/PageNavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NewEntryForm from "../components/NewEntryForm";

export default function EntriesPage() {
  const { journalId } = useParams();
  const [currJournal, setCurrJournal] = useState({});

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

  return (
    <>
      <PageNavBar />
      <Container className="text-center mt-5">
        <h1>{currJournal.name} : Entries Page</h1>
      </Container>

      <NewEntryForm {...{ currJournal, setCurrJournal }} />

      <Stack gap={3} className="align-items-center my-5">
        <Card style={{ width: "20rem" }}>
          <Card.Body className="mx-auto text-center">
            <Card.Title>Entry Title</Card.Title>
            <Button>Open</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "20rem" }}>
          <Card.Body className="mx-auto text-center">
            <Card.Title>Entry Title</Card.Title>
            <Button>Open</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
      </Stack>
    </>
  );
}
