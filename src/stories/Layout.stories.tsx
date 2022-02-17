import { Container, Row, Col, Text } from "../components";

export default {
  title: "Example/Layout",
  component: Container,
  parameters: {},
};

export const Default = () => (
  <Container>
    <Row>
      <Col border="1px solid secondary" xs={12} sm={3} md={2} lg={1}>
        <Text>Col xs.12 sm.3 md.3 lg.1</Text>
      </Col>
      <Col border="1px solid secondary" xs={6} sm={6} md={8} lg={10}>
        <Text>Col xs.6 sm.6 md.6 lg.10</Text>
      </Col>
      <Col border="1px solid secondary" xs={6} sm={3} md={2} lg={1}>
        <Text>Col xs.6 sm.3 md.2 lg.1</Text>
      </Col>
    </Row>
    <Row>
      <Col border="1px solid secondary" xs={12} sm={3} md={2} lg={1}>
        <Text>Col xs.12 sm.3 md.2 lg.1</Text>
      </Col>
      <Col border="1px solid secondary" xs={12} sm={9} md={10} lg={11}>
        <Text>Col xs.12 sm.9 md.10 lg.11</Text>
      </Col>
    </Row>
    <Row>
      <Col border="1px solid secondary" xs={10} sm={6} md={8} lg={10}>
        <Text>Col xs.10 sm.6 md.8 lg.10</Text>
      </Col>
      <Col border="1px solid secondary" xs={2} sm={6} md={4} lg={2}>
        <Text>Col xs.2 sm.6 md.4 lg.2</Text>
      </Col>
    </Row>
  </Container>
);

export const ContainerFluid = () => (
  <Container fluid>
    <Row>
      <Col border="1px solid secondary" xs={12} sm={3} md={2} lg={1}>
        <Text>Col xs.12 sm.3 md.3 lg.1</Text>
      </Col>
      <Col border="1px solid secondary" xs={6} sm={6} md={8} lg={10}>
        <Text>Col xs.6 sm.6 md.6 lg.10</Text>
      </Col>
      <Col border="1px solid secondary" xs={6} sm={3} md={2} lg={1}>
        <Text>Col xs.6 sm.3 md.2 lg.1</Text>
      </Col>
    </Row>
    <Row>
      <Col border="1px solid secondary" xs={12} sm={3} md={2} lg={1}>
        <Text>Col xs.12 sm.3 md.2 lg.1</Text>
      </Col>
      <Col border="1px solid secondary" xs={12} sm={9} md={10} lg={11}>
        <Text>Col xs.12 sm.9 md.10 lg.11</Text>
      </Col>
    </Row>
    <Row>
      <Col border="1px solid secondary" xs={10} sm={6} md={8} lg={10}>
        <Text>Col xs.10 sm.6 md.8 lg.10</Text>
      </Col>
      <Col border="1px solid secondary" xs={2} sm={6} md={4} lg={2}>
        <Text>Col xs.2 sm.6 md.4 lg.2</Text>
      </Col>
    </Row>
  </Container>
);

export const DefaultCol = () => (
  <Container fluid>
    <Row>
      <Col border="1px solid secondary">
        <Text>Col</Text>
      </Col>
      <Col border="1px solid secondary">
        <Text>Col</Text>
      </Col>
      <Col border="1px solid secondary">
        <Text>Col</Text>
      </Col>
    </Row>
    <Row>
      <Col border="1px solid secondary">
        <Text>Col</Text>
      </Col>
      <Col border="1px solid secondary">
        <Text>Col</Text>
      </Col>
    </Row>
    <Row>
      <Col border="1px solid secondary">
        <Text>Col</Text>
      </Col>
      <Col border="1px solid secondary">
        <Text>Col</Text>
      </Col>
    </Row>
  </Container>
);

export const OffsetCol = () => (
  <Row>
    <Col xsOffset={11} xs={1}>
      Col Offset 11
    </Col>
    <Col xsOffset={10} xs={2}>
      Col Offset1 0
    </Col>
    <Col xsOffset={9} xs={3}>
      Col Offset 9
    </Col>
    <Col xsOffset={8} xs={4}>
      Col Offset 8
    </Col>
    <Col xsOffset={7} xs={5}>
      Col Offset 7
    </Col>
    <Col xsOffset={6} xs={6}>
      Col Offset 6
    </Col>
    <Col xsOffset={5} xs={7}>
      Col Offset 5
    </Col>
    <Col xsOffset={4} xs={8}>
      Col Offset 4
    </Col>
    <Col xsOffset={3} xs={9}>
      Col Offset 3
    </Col>
    <Col xsOffset={2} xs={10}>
      Col Offset 2
    </Col>
    <Col xsOffset={1} xs={11}>
      Col Offset 1
    </Col>
  </Row>
);
