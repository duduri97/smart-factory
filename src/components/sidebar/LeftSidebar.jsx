import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'
import { FaT, FaH, FaV } from "react-icons/fa6"
import { TfiLayoutSlider } from "react-icons/tfi";

import './Sidebar.css'

const LeftSidebar = () => {
  const { collapseSidebar } = useProSidebar()

  return (
    <Sidebar className="app" backgroundColor="rgb(0, 0, 0)" style={{ borderColor: 'black' }}>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0) {
              return {
                color: disabled ? '#eee' : '#455A64',
                backgroundColor: active ? '#fff' : undefined,
                '&:hover': {
                  backgroundColor: '#335B8C !important',
                  color: 'white !important',
                  borderRadius: '8px !important',
                  fontWeight: 'bold !important'
                }
              }
            }
          }
        }}>
        <MenuItem
          className="menu1"
          icon={
            <TfiLayoutSlider
              style={{ color: 'white' }}
              onClick={() => {
                collapseSidebar()
              }}
            />
          }>
          <h5 style={{ color: 'white' }}>ROOT SEMICON</h5>
        </MenuItem>
        <MenuItem icon={<GridViewRoundedIcon />} style={{ color: 'white' }}>
          Dashboard
        </MenuItem>
        <MenuItem icon={<FaT />} style={{ color: 'white' }}>
          Tester
        </MenuItem>
        <MenuItem icon={<FaH />} style={{ color: 'white' }}>
          Handler
        </MenuItem>
        <MenuItem icon={<FaV />} style={{ color: 'white' }}>
          Visual 
          <br/>
          Inspect
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default LeftSidebar
