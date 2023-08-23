import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

import FactoryPartModelScene from '../components/three/FactoryPartModelScene'
import FactoryScene from '../components/three/FactoryScene'
import LeftSidebar from '../components/sidebar/LeftSidebar'

// 차트
import FacilityUtilizaionRateChart from '../components/chart/FacilityUtilizaionRateChart'
import SiteYieldChart from '../components/chart/SiteYieldChart'
import OperationalStatus from '../components/chart/OperationalStatus'

// 테이블
import StateHistoryTable from '../components/table/StateHistoryTable'
import FactoryInfoTable from '../components/table/FactoryInfoTable'

import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'

// 테이블
import StateHistoryTable from '../components/table/StateHistoryTable'
import FactoryInfoTable from '../components/table/FactoryInfoTable'

const style = {
  logoImage: {
    width: '50%',
    height: '50%'
  },
  title: {
    fontSize: 'large',
    color: '#dbcfe1',
    padding: '0.1rem 0 0 0.7rem'
  }
}

const DashBoard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 사이드바 */}
      <LeftSidebar />

      {/* 메인 */}
      <Container fluid>
        {/* 헤더 */}
        <Row className="" style={{ height: '10%' }}>
          <Col sm={3}>
            <Row className="h-75 m-1">
              <Image src="./images/logo.png" style={style.logoImage} />
            </Row>
          </Col>
          <Col sm={6}>
            <Row style={{ height: '20%' }}></Row>
            <Row className="h-25 m-1">
              <div className="text-center">
                <Button variant="link" style={{ fontSize: 'xx-large', color: '#dbcfe1' }}>
                  <FaCircleArrowLeft />
                </Button>
                <label style={{ fontSize: 'x-large', color: '#dbcfe1', margin: '1rem' }}>SX5000(A)</label>
                <Button variant="link" style={{ fontSize: 'xx-large', color: '#dbcfe1' }}>
                  <FaCircleArrowRight />
                </Button>
              </div>
            </Row>
          </Col>
          <Col sm={3}>
            <Row style={{ fontSize: 'medium', color: 'white' }}>
              <Col sm={5}></Col>
              <Col sm={7}>ALLforLand RoyLobs</Col>
            </Row>
          </Col>
        </Row>

        {/* 모델  */}
        <Row className="" style={{ height: '60%' }}>
          {/* 기본정보, 가동상태, 소모전력 */}
          <Col sm={3} className="h-100">
            <Row className="h-25 m-1 border border-secondary rounded">
              <div style={style.title}>기본정보</div>
            </Row>
            <Row className="m-1 border border-secondary rounded">
              <OperationalStatus />
            </Row>
            <Row className="h-50 m-1 border border-secondary rounded">
              <div style={style.title}>소모전력</div>
            </Row>
          </Col>

          <Col sm={6} className="h-100" style={{ height: '100%' }}>
            <Row className="h-100 m-1 border border-secondary rounded">
              <FactoryPartModelScene />
            </Row>
          </Col>

          <Col sm={3} className="h-100">
            {/* 공장 모델 */}
            <Row className="h-50 m-1" style={{ height: '100%', borderRadius: '1rem' }}>
              <FactoryScene />
            </Row>
            {/* 설비 가용률 */}
            <Row className="h-50 m-1 border border-secondary rounded">
              <FacilityUtilizaionRateChart />
            </Row>
          </Col>
        </Row>

        {/* 차트 */}
        <Row className="" style={{ height: '35%', marginTop: '1rem' }}>
          <Col sm={3} className="h-100">
            <Row className="h-75 m-1 border border-secondary rounded">
              <StateHistoryTable />
            </Row>
          </Col>
          <Col sm={6} className="h-100">
            <Row className="h-75 m-1 border border-secondary rounded">
              <FactoryInfoTable />
            </Row>
          </Col>
          <Col sm={3} className="h-100">
            <Row className="h-75 m-1 border border-secondary rounded">
              <SiteYieldChart />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DashBoard
