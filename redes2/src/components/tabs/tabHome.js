import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";

function Home() {
  return (
    <>
      <Container>
        <Carousel variant="dark">
          {data.map((tab, index) => (
            <Carousel.Item key={index}>
              <img className="rounded mx-auto d-block w-50" src={tab.imagen} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

const data = [
  {
    imagen: "https://robohash.org/person",
  },
  {
    imagen: "https://robohash.org/person2",
  },
  {
    imagen: "https://robohash.org/person3",
  },
  {
    imagen: "https://robohash.org/person4",
  },
];
export default Home;
