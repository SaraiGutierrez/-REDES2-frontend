import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Develop() {
  return (
    <>
      <Container>
        <Row>
          {data.map((tab, index) => (
            <Col key={index} >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={tab.imagen} />
                <Card.Body>
                  <Card.Title>{tab.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {tab.cargo}
                  </Card.Subtitle>
                  <Card.Text>{tab.carnet}</Card.Text>
                  <Card.Text>{tab.curso}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

const data = [
  {
    nombre: "Nombre 1",
    carnet: "carnet1",
    curso: "curso1",
    cargo: "Cargo 1",
    imagen: "https://robohash.org/person",
  },
  {
    nombre: "Nombre 2",
    carnet: "carnet2",
    curso: "curso2",
    cargo: "Cargo 2",
    imagen: "https://robohash.org/person2",
  },
  {
    nombre: "Nombre 3",
    carnet: "carnet3",
    curso: "curso3",
    cargo: "Cargo 3",
    imagen: "https://robohash.org/person3",
  },
  {
    nombre: "Nombre 4",
    carnet: "carnet4",
    curso: "curso4",
    cargo: "Cargo 4",
    imagen: "https://robohash.org/person4",
  },
];
export default Develop;
