import { useRef } from 'react'
import { Carousel, Button } from 'react-bootstrap'

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import PowerConsumptionLineChart from '../chart/PowerConsumptionLineChart'
import DeCompressChart from '../chart/DeCompressChart';

const style = {
  button: {
    color: '#dbcfe1',
    fontSize: 'large'
  }
}

const CarouselTemplate = () => {
  const caroueslRef = useRef(null);

  const onPrevClick = () => {
    caroueslRef.current.prev();
  };
  const onNextClick = () => {
    caroueslRef.current.next();
  };

  return (
    <>
      <div style={{ display: 'flex',alignItems: 'center',justifyContent: 'end'}}>
        <Button variant="link" onClick={onPrevClick} style={style.button}>
          <BsFillCaretLeftFill />
        </Button>
        <Button variant="link" onClick={onNextClick} style={style.button}>
          <BsFillCaretRightFill />
        </Button>
      </div>

      <Carousel
        ref={caroueslRef}
        controls={false}
        indicators={false}>
        <Carousel.Item>
          <PowerConsumptionLineChart />
        </Carousel.Item>
        <Carousel.Item>
          <DeCompressChart />
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export default CarouselTemplate
