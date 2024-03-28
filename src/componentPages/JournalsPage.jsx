import NewJournalForm from "../components/NewJournalForm";
import PageNavBar from "../components/PageNavBar";
import Container from "react-bootstrap/Container";
import Journal from "../components/Journal";
import Row from "react-bootstrap/Row";

import { useEffect, useState } from "react";

export default function JournalsPage() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:5500/journals");
      const data = await response.json();
      setJournals(data);
    }

    getData();
  }, []);

  return (
    <>
      <PageNavBar />
      <Container className="text-center mt-5">
        <h1>Journals Page</h1>
      </Container>
      <NewJournalForm updateJournals={setJournals} />
      <Container className="my-5">
        <Row className="justify-content-center">
          {journals.map((journal) => {
            return (
              <Journal
                updateJournals={setJournals}
                journalData={journal}
                key={`journal_${journal.id}`}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}
