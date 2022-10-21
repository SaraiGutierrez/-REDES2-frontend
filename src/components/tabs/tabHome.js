import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import home1 from "../../img/home1.jpg"
import home2 from "../../img/home2.jpg"
import home3 from "../../img/home3.jpg"
import home4 from "../../img/home4.jpg"
import home5 from "../../img/home5.jpg"
import home6 from "../../img/home6.jpg"
function Home() {
  return (
    <>
      <Container>
        <Carousel variant="dark">
          {data.map((tab, index) => (
            <Carousel.Item key={index}>
              <img className="rounded mx-auto d-block w-95" src={tab.imagen} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

const data = [
  {
    imagen: home2,
  },
  {
    imagen: home1,
  },
  {
    imagen: home3,
  },
  {
    imagen: home4,
  },
  {
    imagen: home5,
  },
  {
    imagen: home6,
  },
];
export default Home;
