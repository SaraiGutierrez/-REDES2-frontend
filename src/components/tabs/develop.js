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
    nombre: "Pedro Rolando Ordoñez Carrillo",
    carnet: "201701187",
    curso: "Redes 2",
    cargo: "Coordinador",
    imagen: "https://robohash.org/person6",
  },
  {
    nombre: "Sergio Sebastian Chacón Herrera",
    carnet: "201709159",
    curso: "Redes 2",
    cargo: "Admin cloud",
    imagen: "https://robohash.org/person7",
  },
  {
    nombre: "Virginia Sarai Gutierrez Depaz",
    carnet: "201504443",
    curso: "Redes 2",
    cargo: "Frontend develop",
    imagen: "https://robohash.org/person1",
  },
  {
    nombre: "Luis Alfonso Ordoñez Carrillo",
    carnet: "201603127",
    curso: "Redes 2",
    cargo: "DBManagment",
    imagen: "https://robohash.org/person8",
  },
];
export default Develop;
