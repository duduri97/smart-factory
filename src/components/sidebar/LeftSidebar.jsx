import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import './Sidebar.css'

const LeftSidebar = () => {
  const { collapseSidebar } = useProSidebar()

  return (
    <Sidebar className="app">
      <Menu>
        <MenuItem
          className="menu1"
          icon={
            <MenuRoundedIcon
              onClick={() => {
                collapseSidebar()
              }}
            />
          }>
          <h2>QUICKPAY</h2>
        </MenuItem>
        <MenuItem icon={<HomeOutlinedIcon />}> Dashboard </MenuItem>
        <MenuItem icon={<HomeOutlinedIcon />}> Invoices </MenuItem>
        <MenuItem icon={<HomeOutlinedIcon />}> Charts </MenuItem>
        <MenuItem icon={<HomeOutlinedIcon />}> Wallets </MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default LeftSidebar
