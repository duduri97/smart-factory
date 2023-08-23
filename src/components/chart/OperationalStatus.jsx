import { useState } from "react";
import { Form } from 'react-bootstrap'

const OperationalStatus = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label style={{ fontSize: 'large', color: '#dbcfe1' }}>가동상태</label>
        <Form style={{ fontSize: 'xxx-large' }}>
          <Form.Check
            type="switch"
            id="custom-switch"
            isValid="true"
            checked={isChecked}
            onChange={handleToggle}
          />
        </Form>
      </div>
    </>
  )
}

export default OperationalStatus
