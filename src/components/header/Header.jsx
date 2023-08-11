import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            ALLforLAND
          </Navbar.Text>
          <Navbar.Text>
            ROY Lobs
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header