import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Admin from "../components/tabs/admin";
import Develop from "../components/tabs/develop";
import THome from "../components/tabs/tabHome";
import Public from "../components/tabs/public";
import { LineChart } from "../components/tabs/lineChart";
import { BarChart } from "../components/tabs/barChart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const [key, setKey] = useState("home");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <THome />
      </Tab>
      <Tab eventKey="profile" title="Administradores">
        <Admin />
      </Tab>
      <Tab eventKey="desarroladores" title="Desarrolladores">
        <Develop />
      </Tab>
      <Tab eventKey="public" title="Funcion Publica">
        <Public />
      </Tab>
      <Tab eventKey="economic" title="Desarrollo Economico">
        <Container>
          <Row style={{ padding: "1em" }}>
            <Col >
              <LineChart />
            </Col>
          </Row>
          <Row style={{ padding: "1em" }}>
            <Col>
              <BarChart />
            </Col>
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
}

export default Home;
