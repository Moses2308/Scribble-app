import PageNavBar from "../components/PageNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HomePage() {
  return (
    <>
      <PageNavBar />
      <Container className="text-center mt-5">
        <h1>Scribble</h1>
        <p>The web app I made to learn React Router and Bootstrap React</p>
      </Container>
      <Container fluid className="mt-5">
        <Row className="column-gap-2">
          <Col>
            <img
              src="https://cdn.thewirecutter.com/wp-content/media/2020/11/notebooks-2048px-1988.jpg?auto=webp&quality=75&width=1024"
              alt="generic notebook"
            />
          </Col>
          <Col>
            <h2>What is Scribble?</h2>
            <p>
              Scribble is a simple journal app. You can create journals and
              entries within journals to store whatever text data you want. You
              can create multiple journals for whatever needs you have. The app
              was created as a way to learn React Router, learn Bootstrap React,
              and to practice implementing CRUD functionality to web apps.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              deserunt asperiores vel et inventore perspiciatis, doloribus
              facilis, atque culpa at impedit eveniet necessitatibus possimus!
              Maxime illum pariatur dolores nam natus. Rem quod blanditiis ipsum
              quam officiis, adipisci aspernatur alias quibusdam distinctio.
              Eaque, modi doloribus. Eum earum, libero nulla dignissimos,
              praesentium exercitationem eaque autem eveniet veniam, repellat
              dicta! Possimus, veniam odit. Possimus voluptas adipisci autem
              aliquam sapiente voluptates?
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
