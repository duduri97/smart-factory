import { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'

import { clickModelPostion } from '../../store'

const MiniMapFactoryModel = () => {
  const groupRef = useRef()
  const { setModelPartName, setPosition, setLerping } = clickModelPostion((state) => state)
  const { nodes } = useGLTF('./models/Factory_1.glb')
  const [hovered, setHover] = useState()

  const onClickEventHandler = (e) => {
    setPosition(e.object.position)
    setLerping(true)
    setHover(e.object.name)
    setModelPartName(e.object.name)
  };


  return (
    <>
      <group ref={groupRef} dispose={null}>
        <primitive object={nodes.Scene} />
        {['BlueBox', 'GreenBox', 'RedBox'].map((modelName) => (
          <Select key={modelName} name={modelName} enabled={hovered === modelName}>
            <mesh
              name={modelName}
              onClick={onClickEventHandler}
            >
              <primitive object={nodes[modelName]} />
            </mesh>
          </Select>
        ))}

      </group>
    </>
  )
}

export default MiniMapFactoryModel
