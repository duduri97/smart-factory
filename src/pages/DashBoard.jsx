import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

import FactoryPartModelScene from '../components/three/FactoryPartModelScene'
import FactoryScene from '../components/three/FactoryScene'
import LeftSidebar from '../components/sidebar/LeftSidebar'

import FacilityUtilizaionRateChart from '../components/chart/FacilityUtilizaionRateChart'
import SiteYieldChart from '../components/chart/SiteYieldChart'

const style = {
  logoImage: {
    width: '90%',
    height: '90%',
  },
  chartLabel: {
    fontSize: 'medium'
  },
  outline: {
    borderRadius: '1rem',
    color: 'white'
  },
  title: {
    fontSize: 'large',
    color: '#dbcfe1',
    padding: '0.1rem 0 0 0.7rem',
  }
}

const DashBoard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* 사이드바 */}
      <LeftSidebar />
      <Container fluid>
        {/* 헤더 */}
        <Row className="" style={{ height: '15%' }}>
          <Col sm={3}>
            <Row className="h-75 m-1">
              <Image src='./public/images/logo.png' style={style.logoImage} />
            </Row>
          </Col>
          <Col sm={6}>
            <Row className="h-25"></Row>
            <Row className="h-50 m-1 border border-secondary" style={style.outline}>
              3D모델 이동버튼
            </Row>
          </Col>
          <Col sm={3}>
            <Row style={style.outline}>
              <Col sm={5}></Col>
              <Col sm={7}>ALLforLand RoyLobs</Col>
            </Row>
          </Col>
        </Row>

        {/* 모델  */}
        <Row className="" style={{ height: '55%' }}>
          {/* 기본정보, 가동상태, 소모전력 */}
          <Col sm={3} className="h-100">
            <Row className="h-25 m-1 border border-secondary" style={style.outline}>
              <div style={style.title}>기본정보</div>
            </Row>
            <Row className="h-25 m-1 border border-secondary" style={style.outline}>
              <div style={style.title}>가동상태</div>
            </Row>
            <Row className="h-50 m-1 border border-secondary" style={style.outline}>
              <div style={style.title}>소모전력</div>
            </Row>
          </Col>

          {/* 공장 부품 모델 */}
          <Col sm={6} className="h-100" style={{ height: '100%' }}>
            <Row className="h-100 m-1 border border-secondary" style={style.outline}>
              <FactoryPartModelScene />
            </Row>
          </Col>

          <Col sm={3} className="h-100">
            {/* 공장 모델 */}
            <Row className="h-50 m-1" style={{ height: '100%', borderRadius: '1rem' }}>
              <FactoryScene />
            </Row>
            {/* 설비 가용률 */}
            <Row className="h-50 m-1 border border-secondary" style={style.outline}>
              <div style={style.title}>설비 가용률</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                <label style={style.chartLabel}>평균수리시간</label>  
                <label style={style.chartLabel}>평균고강간격</label>  
              </div>
              <div style={{ display: 'flex', width:'100%' ,justifyContent:'space-between'}}>
                <div style={{ padding: '2rem 0 0 0'}}>
                  <label style={style.chartLabel}>MTTR</label>
                  <br></br>
                  <label style={style.chartLabel}>60분</label>
                </div>
                <FacilityUtilizaionRateChart/>
                <div style={{ padding: '2rem 0 0 0'}}>
                  <label style={style.chartLabel}>MTBF</label>
                  <br></br>
                  <label style={style.chartLabel}>1,515분</label>
                </div>
              </div>
            </Row>
          </Col>
        </Row>

        {/* 차트 */}
        <Row className="" style={{ height: '30%', marginTop: '2rem' }}>
          <Col sm={3} className="h-100">
            <Row className="h-75 m-1 border border-secondary" style={style.outline}>
              <div style={style.title}>상태이력조회</div>
            </Row>
          </Col>
          <Col sm={6} className="h-100">
            <Row className="h-75 m-1 border border-secondary" style={style.outline}>
              <div style={style.title}>공정정보</div>
            </Row>
          </Col>
          <Col sm={3} className="h-100">
            <Row className="h-75 m-1 border border-secondary" style={style.outline}>
            <div style={style.title}>설비 가용률</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                <label style={style.chartLabel}>PASS</label>  
                <label style={style.chartLabel}>68,651건</label>  
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width:'100%'}}>
                <label style={style.chartLabel}>FAIL</label>  
                <label style={style.chartLabel}>470건</label>  
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div style={{ padding: '2rem 0 0 0'}}>
                  <label style={style.chartLabel}>In Qty</label>
                  <br></br>
                  <label style={style.chartLabel}>69,121</label>
                </div>
                  <SiteYieldChart />
                <div style={{ padding: '2rem 0 0 0'}}>
                  <label style={style.chartLabel}>Out Qty</label>
                  <br></br>
                  <label style={style.chartLabel}>68,651</label>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DashBoard
