import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function Public() {
  return (
    <>
      <Container>
        <Row>
          {data.map((tab, index) => (
            <Col key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={tab.imagen} />
                <Card.Body>
                  <Card.Text>{tab.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <font size={"6"}>
            <h2>Ultimas noticias</h2>
          </font>
        </Row>
        <Row>
          <Carousel variant="dark">
            {notice.map((tab, index) => (
              <Carousel.Item key={index}>
                <img className="rounded mx-auto d-block w-80" src={tab.imagen} alt="First slide" />
                <Carousel.Caption>
                  <h3>{tab.nombre}</h3>
                  <p>{tab.descripcion}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </>
  );
}

const data = [
  {
    nombre: "funcion1",
    descripcion: "descripcion1",
    imagen: "https://robohash.org/person",
  },
  {
    nombre: "funcion2",
    descripcion: "descripcion2",
    imagen: "https://robohash.org/person2",
  },
  {
    nombre: "funcion3",
    descripcion: "descripcion3",
    imagen: "https://robohash.org/person3",
  },
  {
    nombre: "funcion4",
    descripcion: "descripcion4",
    imagen: "https://robohash.org/person4",
  },
  {
    nombre: "funcion5",
    descripcion: "descripcion5",
    imagen: "https://robohash.org/person5",
  },
];

const notice = [
  {
    nombre: "noticia1",
    descripcion: "descripcion1",
    imagen: "https://robohash.org/person",
  },
  {
    nombre: "noticia2",
    descripcion: "descripcion2",
    imagen: "https://robohash.org/person",
  },
  {
    nombre: "noticia3",
    descripcion: "descripcion3",
    imagen: "https://robohash.org/person",
  },
  {
    nombre: "noticia4",
    descripcion: "descripcion4",
    imagen: "https://robohash.org/person",
  },
  {
    nombre: "noticia5",
    descripcion: "descripcion5",
    imagen: "https://robohash.org/person",
  },
];
export default Public;
