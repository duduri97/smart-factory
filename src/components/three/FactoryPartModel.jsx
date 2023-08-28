import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import { clickModelPostion } from '../../store'

const FactoryPartModel = () => {
  const groupRef = useRef()
  const {nodes} = useGLTF('./models/Factory_2.glb')
  const [hovered, setHover] = useState()
  const { modelPartName } = clickModelPostion((state) => state)

  return (
    <>
      <group ref={groupRef} dispose={null}>
        <primitive object={nodes.Scene} />
        {['BlueBox', 'GreenBox', 'RedBox'].map((modelName) => (
          <Select key={modelName} name={modelName} enabled={hovered === modelName || modelPartName === modelName}>
            <mesh
              name={modelName}
              onPointerOver={() => setHover(modelName)}
              onPointerOut={() => setHover(false)}
            >
              <primitive object={nodes[modelName]} />
            </mesh>
          </Select>
        ))}

      </group>
    </>
  )
}

export default FactoryPartModel
