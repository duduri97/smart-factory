import { useRef, useEffect } from 'react'
import { CameraControls } from '@react-three/drei'
import { clickModelPostion } from '../../store'

const FactoryPartCameraControl = () => {
  const cameraControlsRef = useRef()
  const {position, lerping} = clickModelPostion((state) => state)

  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.setLookAt(190, 50, -110, 80, 0, -110) 
      if (lerping) {
        cameraControlsRef.current.setLookAt(position.x, 50, position.z, position.x - 10, 0, position.z) 
      }
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
