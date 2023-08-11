import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import FactoryPartModelScene from '../components/three/FactoryPartModelScene'
import FactoryScene from '../components/three/FactoryScene'
import LeftSidebar from '../components/sidebar/LeftSidebar'

const DashBoard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftSidebar />
      <Container fluid>
        <Row>
          <Col sm={4}>
            <FactoryPartModelScene />
          </Col>
          <Col sm={8}>
            <FactoryScene />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DashBoard
