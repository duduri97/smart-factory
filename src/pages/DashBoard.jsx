import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DashBoardScene from '../components/three/DashBoardScene'
import ThreeScene from '../components/three/ThreeScene'
import Sidebar from '../components/Sidebar'

const DashBoard = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={1}> <Sidebar /></Col>
        <Col sm={11}>
          <Row>
            <Col sm={4}><DashBoardScene /></Col>
            <Col sm={8}><ThreeScene /></Col>
          </Row>
          <Row>
            <Col sm={3}>1 of 4</Col>
            <Col sm={3}>2 of 4</Col>
            <Col sm={3}>3 of 4</Col>
            <Col sm={3}>4 of 4</Col>
          </Row>
          <Row>
            <Col sm={3}>1 of 4</Col>
            <Col sm={3}>2 of 4</Col>
            <Col sm={3}>3 of 4</Col>
            <Col sm={3}>4 of 4</Col>
          </Row>
        </Col>

      </Row>
    </Container>
  )
}

export default DashBoard
