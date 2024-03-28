import PageNavBar from "../components/PageNavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

// console.log(await Requester.getJournalbyId("493d"));

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
    </>
  );
}
