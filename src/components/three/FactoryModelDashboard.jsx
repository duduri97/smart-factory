import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'

const FactoryModelDashboard = () => {
  const groupRef = useRef()
  const gltf = useGLTF('./models/DSG_A.gltf')
  const [hover, setHover] = useState()

  return (
    <>
      <Select enabled={hover}>
        <group ref={groupRef} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
          <primitive object={gltf.scene} position={[-8, 0, 0]} />
        </group>
      </Select>
    </>
  )
}

export default FactoryModelDashboard
