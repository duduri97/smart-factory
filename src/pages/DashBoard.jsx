import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import FactoryPartModelScene from '../components/three/FactoryPartModelScene'
import MiniMapFactoryScene from '../components/three/MiniMapFactoryScene'
import LeftSidebar from '../components/sidebar/LeftSidebar'

// 차트
import FacilityUtilizaionRateChart from '../components/chart/FacilityUtilizaionRateChart'
import SiteYieldChart from '../components/chart/SiteYieldChart'
import CarouselTemplate from '../components/carouse/CarouselTemplate.jsx.jsx'

// 테이블
import StateHistoryTable from '../components/table/StateHistoryTable'
import FactoryInfoTable from '../components/table/FactoryInfoTable'

// 버튼
import OperationalStatusButton from '../components/button/OperationalStatusButton'
import FactoryFacilityMovementButton from '../components/button/FactoryFacilityMovementButton'

// 정보
import FactoryFacilityInfo from '../components/info/FactoryFacilityInfo'

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
          </Col>
          <Col sm={6}>
            <Row style={{ height: '20%' }}></Row>
            <Row className="h-25 m-1">
              <FactoryFacilityMovementButton />
            </Row>
          </Col>
          <Col sm={3}>
          </Col>
        </Row>

        {/* 모델  */}
        <Row className="" style={{ height: '60%' }}>
          {/* 기본정보, 가동상태, 소모전력 */}
          <Col sm={3} className="h-100">
            <Row className="h-25 m-1 border border-secondary rounded">
              <FactoryFacilityInfo />
            </Row>
            <Row className="h-25 m-1 border border-secondary rounded">
              <OperationalStatusButton />
            </Row>
            <Row className="h-50 m-1 border border-secondary rounded">
              <CarouselTemplate />
            </Row>
          </Col>

          <Col sm={6} className="h-100" style={{ height: '100%' }}>
            <Row className="h-100 border border-secondary rounded">
              <FactoryPartModelScene />
            </Row>
          </Col>

          <Col sm={3} className="h-100">
            {/* 공장 모델 */}
            <Row className="h-50 m-1" style={{ height: '100%', borderRadius: '1rem' }}>
              <MiniMapFactoryScene />
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
            <Row className="h-75 border border-secondary rounded">
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
