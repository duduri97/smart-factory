import { Suspense,useRef } from 'react'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { EffectComposer, Selection, Outline, Select } from '@react-three/postprocessing'

import Light from './Light'

import MiniMapFactoryCameraControl from './MiniMapFactoryCameraControl'
import { clickModelPostion } from '../../store'

const MiniMapFactoryScene = () => {
  const groupRef = useRef()
  const { modelPartName, setModelPartName, setPosition, setLerping, setMove } = clickModelPostion((state) => state)
  const { nodes } = useGLTF('./models/Factory_1.glb')

  const onClickEventHandler = (e) => {
    setPosition(e.object.position)
    setLerping(true)
    setMove(true)
    setModelPartName(e.object.name)
  }

  return (
    <>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <Suspense>
          <Light />
          <Selection>
            <EffectComposer multisampling={1} autoClear={false}>
              <Outline blur visibleEdgeColor="red" edgeStrength={10000} width={1000} />
            </EffectComposer>

            <group ref={groupRef} dispose={null}>
              <primitive object={nodes.Scene} />
              {['BlueBox', 'GreenBox', 'RedBox'].map((modelName) => (
                <Select key={modelName} name={modelName} enabled={modelPartName === modelName}>
                  <mesh
                    name={modelName}
                    onClick={onClickEventHandler}
                    // onPointerOut={() => setLerping(false)}
                  >
                    <primitive object={nodes[modelName]} />
                  </mesh>
                </Select>
              ))}
            </group>
          </Selection>
        </Suspense>

        {/* Helper */}
        {/* <Perf position="bottom-left" /> */}

        {/* <axesHelper args={[100]} /> */}

        <MiniMapFactoryCameraControl />
      </Canvas>
    </>
  )
}

export default MiniMapFactoryScene
