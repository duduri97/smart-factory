import React from 'react'
import { Nav } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/smart-factory/dashboard">dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/smart-factory/template">template</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Sidebar
