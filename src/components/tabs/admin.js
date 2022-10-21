import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import admin1 from "../../img/admin1.jpg"
import admin3 from "../../img/admin3.jpg"
import admin6 from "../../img/admin6.jpg"
function Admin() {
  return (
    <>
      <Container>
        <Row>
          {data.map((tab, index) => (
            <Col key={index} >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" style={{width: "10rem" }} src={tab.imagen} />
                <Card.Body>
                  <Card.Title>{tab.nombre}</Card.Title>
                  <Card.Subtitle className="badge bg-primary text-wrap">
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
    nombre: "Lucia Rebeca Quintanilla Barrientos",
    cargo: "VicePresidente",
    descripcion: "Asesorar y recomendar a la Presidencia y demás áreas en la definición interna de directrices, políticas, normas, criterios, y metodologías para el diseño estratégico del negocio, seguimiento y evaluación del plan estratégico acorde con las prácticas y tendencias del sector nacional e internacional.",
    imagen:admin1
  },
  {
    nombre: "Mynor José Ramirez Hernandez",
    cargo: "Presidente",
    descripcion: "Ser un líder fuerte e independiente, dotado de experiencia y credibilidad. · Liderar y garantizar las buenas prácticas.",
    imagen: admin6,
  },
  {
    nombre: "Samuel Alexander Girón Peña",
    cargo: "Ministro de Seguridad",
    descripcion: "Ejercer la conducción y coordinación operativa de las dependencias bajo su mando en cumplimiento de las metas, acciones y tareas ordenadas, conforme a las normas constitucionales legales y reglamentarias vigentes.",
    imagen: admin3,
  }
];
export default Admin;
