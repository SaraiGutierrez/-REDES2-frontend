import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Admin() {
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
                  <Card.Text>{tab.descripcion}</Card.Text>
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
    cargo: "Cargo 1",
    descripcion: "descripcion 1",
    imagen: "https://robohash.org/person",
  },
  {
    nombre: "Nombre 2",
    cargo: "Cargo 2",
    descripcion: "descripcion 2",
    imagen: "https://robohash.org/person1",
  },
  {
    nombre: "Nombre 3",
    cargo: "Cargo 3",
    descripcion: "descripcion 3",
    imagen: "https://robohash.org/person2",
  },
  {
    nombre: "Nombre4",
    cargo: "Cargo 4",
    descripcion: "descripcion 4",
    imagen: "https://robohash.org/person3",
  },
];
export default Admin;
