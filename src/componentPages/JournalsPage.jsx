import NewJournalForm from "../components/NewJournalForm";
import PageNavBar from "../components/PageNavBar";
import Container from "react-bootstrap/Container";

export default function JournalsPage() {
  return (
    <>
      <PageNavBar />
      <Container className="text-center mt-5">
        <h1>Journals Page</h1>
      </Container>
      <NewJournalForm />
    </>
  );
}
