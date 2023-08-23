import { useRef, useEffect } from 'react'
import { CameraControls } from '@react-three/drei'

const FactoryPartCameraControl = () => {
  const cameraControlsRef = useRef()

  // Use useFrame to update the camera controls
  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.setLookAt(170, 50, -110, 80, 0, -110) 
    }
  })

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        verticalDragToForward={true}
        dollySpeed={0.1}
        minPolarAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  )
}

export default FactoryPartCameraControl
