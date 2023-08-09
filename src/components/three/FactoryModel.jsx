import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'

const FactoryModel = () => {
  const groupRef = useRef()
  const gltf = useGLTF('./public/models/DSG_TEST.glb')
  const [hover, setHover] = useState()

  return (
    <>
      <Select enabled={hover}>
        <group ref={groupRef} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
          <primitive object={gltf.scene} position={[0, 0, 0]} />
        </group>
      </Select>
    </>
  )
}

export default FactoryModel
