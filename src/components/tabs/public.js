import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import public1 from "../../img/public1.JPG";
import public2 from "../../img/public2.JPG";
import public3 from "../../img/public3.JPG";
import public4 from "../../img/public4.JPG";
import public5 from "../../img/public5.JPG";
import public6 from "../../img/public6.JPG";
import bg from "../../img/bg.jpg";
import bg2 from "../../img/bg2.jpg";
import bg3 from "../../img/bg3.jpg";


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
                  <Card.Title>{tab.nombre}</Card.Title>
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
                <img
                  className="rounded mx-auto d-block w-100"
                  style={{ high: "300rem" }}
                  src={tab.imagen}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <font COLOR="white">
                    <h3>{tab.nombre}</h3>
                    <h5>{tab.descripcion}</h5>
                  </font>
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
    nombre: "Estructuras",
    descripcion:
      "responder a los propósitos institucionales en términos de eficacia, eficiencia y efectividad para la prestación de los servicios por parte de las entidades, logrando la satisfacción de las necesidades de la comunidad.",
    imagen: public1,
  },
  {
    nombre: "Pautas Culturales",
    descripcion:
      "lineamientos que tiene una cultura (sociedad) o sea los limites o normas de dicha cultura.",
    imagen: public2,
  },
  {
    nombre: "Politicas Explicitas",
    descripcion:
      "lineamientos que tiene una cultura (sociedad) o sea los limites o normas de dicha cultura. ",
    imagen: public3,
  },
  {
    nombre: "Procesos",
    descripcion:
      "optimiza el uso de los recursos y garantiza mejores resultados para toda la sociedad. ",
    imagen: public4,
  },
  {
    nombre: "Normas",
    descripcion:
      "Principio que se impone o se adopta para dirigir la conducta o la correcta realización de una acción o el correcto desarrollo de una actividad.",
    imagen: public5,
  },
  {
    nombre: "Prácticas y Actividades",
    descripcion:
      "es aquella en la que los aprendientes deben usar de modo creativo los conocimientos o destrezas que han sido presentados y practicados previamente. ",
    imagen: public6,
  },
];

const notice = [
  {
    nombre: "Población en pobreza",
    descripcion:
      "El índice de pobreza es realmente preocupante, sobre todo porque somos el país con el mayor Producto Interno Bruto de los que figura en la cola de la lista y ello marca los altos niveles de desigualdad son mucho mayores aquí que en otras latitudes y ello prueba la ausencia absoluta de políticas públicas para mitigar la pobreza y generar oportunidades a la población. Y ese alto porcentaje sería mucho más escandaloso si varios millones de chapines pobres no hubieran emigrado a Estados Unidos en busca de trabajo para mantener a sus familia. Las previsiones para el futuro inmediato no son halagadoras porque los efectos de la situación económica mundial apuntan a un incremento de esa cifra de pobreza y también, tristemente, de la de quienes viven en extrema pobreza. Las proyecciones de crecimiento económico se han ajustado mundialmente a la baja y Guatemala no es una excepción, por lo tanto, se puede dar por sentado que en los próximos meses no hay mucha esperanza de revertir ese incremento y es muy probable que pronto estemos con más del 60% de habitantes viviendo en pobreza.",
    imagen: bg,
  },
  {
    nombre: "Cámara de Comercio: alza del tipo de cambio no es por aumento de importaciones",
    descripcion: "Por tercera ocasión la Cámara de Comercio de Guatemala (CCG) se pronuncia respecto al aumento del tipo de cambio dólar-quetzal observado en las últimas semanas. En un comunicado emitido este miércoles, 19 de octubre, la entidad asegura que el alza del dólar frente al quetzal no es causada por un incremento en el valor de las importaciones, como lo ha sostenido el presidente del Banco de Guatemala (Banguat), Álvaro González Ricci en reiteradas ocasiones.",
    imagen: bg2,
  },
  {
    nombre: "Dólar fuerte, mala noticia para la economía mundial",
    descripcion: "El costo de la vida en El Cairo subió tanto que el guardia Mustafá Gama tuvo que enviar a su esposa y su hija de un año a vivir con sus padres, en un pueblo 112 kilómetros (70 millas) el sur de la capital egipcia, para reducir los gastos. Gamal, de 28 años, se quedó en El Cairo. Trabaja en dos sitios y comparte un departamento con otros jóvenes. Eliminó la carne de su dieta. «Los precios de todo se duplicaron», se lamentó. «No teníamos otra alternativa». En todo el mundo la gente enfrenta las mismas penurias y frustraciones que Gamal. El dueño de un negocio de repuestos para automóviles de Nairobi, una vendedora de ropa de Estambul y un importador de vinos de Manchester (Inglaterra) se quejan de lo mismo: Un dólar cada vez más fuerte contribuye a que los precios de todo estén por las nubes. Esto agrava una situación muy precaria, en la que las familias soportan escasez y una escalada de precios derivada de la invasión rusa de Ucrania. «Un dólar fuerte empeora un panorama ya de por sí malo para el resto del mundo», expresó Eswar Prasad, profesor de políticas comerciales de la Cornell University. Muchos economistas temen que un agudo aumento del dólar genere una recesión mundial el año que viene.",
    imagen: bg3,
  }
];
export default Public;
