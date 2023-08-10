import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import DashBoardScene from '../components/three/DashBoardScene'
import ThreeScene from '../components/three/ThreeScene'
import LeftSidebar from '../components/sidebar/LeftSidebar'

const DashBoard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftSidebar />
      <Container fluid>
        <Row>
          <Col sm={4}>
            <DashBoardScene />
          </Col>
          <Col sm={8}>
            <ThreeScene />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DashBoard
