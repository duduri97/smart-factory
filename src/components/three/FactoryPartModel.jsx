import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'

const FactoryPartModel = () => {
  const groupRef = useRef()
  const gltf = useGLTF('./models/Factory_2.glb')
  const [hover, setHover] = useState()

  return (
    <>
      <Select enabled={hover}>
        <group ref={groupRef} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
          <primitive object={gltf.scene} position={[-8, 0, 3]} />
        </group>
      </Select>
    </>
  )
}

export default FactoryPartModel
