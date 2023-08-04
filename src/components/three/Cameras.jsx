import { CameraControls } from '@react-three/drei'

export default function Cameras() {
  return (
    <>
      <CameraControls 
          target={[0, 0, 0]}
          enableDamping ={true}
          minDistance={10}
          maxDistance={250}
          verticalDragToForward={true}
          dollySpeed={0.5}
          polarRotateSpeed={0.5}
          minPolarAngle={-Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
      />
    </>
  )
}