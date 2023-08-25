import React from 'react'
import LeftSidebar from '../components/sidebar/LeftSidebar'
import Typography from '@mui/material/Typography'

import MiniMapFactoryScene from '../components/three/MiniMapFactoryScene'

const style = {
  home: {
    display: 'grid',
    gap: '5px',
    paddingLeft: '5px',
    paddingTop: '5px',
    pdddingBottom: '5px',
    gridAutoRows: 'minmax(120px, auto)',
    width: '100%',
    gridTemplateColumns: '1fr 1fr 1fr 1fr'
  },
  box: {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid rgb(245, 242, 242, 0.3)',
    backgroundColor: 'rgb(0, 255, 255, 0)',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box1: {
    gridColumn: 'span 2',
    gridRow: 'span 1',
    marginTop: '5px',
    height: '400px',
    marginBottom: '0px'
  }
}

const Home = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeftSidebar />
      <div className="home" style={style.home}>
        <div className="box box1" style={{ ...style.box, ...style.box1 }}>
          <Typography sx={{ color: 'red' }}>box1</Typography>
        </div>

        <div className="box box2" style={{ ...style.box, ...style.box1 }}>
          <Typography sx={{ color: 'red' }}>
            <MiniMapFactoryScene />
          </Typography>
        </div>
        <div className="box box3" style={style.box}>
          <Typography sx={{ color: 'red' }}>box3</Typography>
        </div>

        <div className="box box4" style={style.box}>
          <Typography sx={{ color: 'red' }}>box4</Typography>
        </div>
        <div className="box box5" style={style.box}>
          <Typography sx={{ color: 'red' }}>box5</Typography>
        </div>
        <div className="box box6" style={style.box}>
          <Typography sx={{ color: 'red' }}>box6</Typography>
        </div>
        <div className="box box7" style={style.box}>
          <Typography sx={{ color: 'red' }}>box7</Typography>
        </div>

        <div className="box box8" style={style.box}>
          <Typography sx={{ color: 'red' }}>box8</Typography>
        </div>
        <div className="box box9" style={style.box}>
          <Typography sx={{ color: 'red' }}>box9</Typography>
        </div>
        <div className="box box10" style={style.box}>
          <Typography sx={{ color: 'red' }}>box10</Typography>
        </div>
      </div>
    </div>
  )
}

export default Home
