import { Suspense } from 'react'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'

import { EffectComposer, Selection, Outline } from '@react-three/postprocessing'

import MiniMapFactoryModel from './MiniMapFactoryModel'
import Light from './Light'

import MiniMapFactoryCameraControl from './MiniMapFactoryCameraControl'


const MiniMapFactoryScene = () => {
  return (
    <>
      <Canvas style={{width:'100%',height:'100%'}}>

        <Suspense>
          <Light />
          <Selection>
            <EffectComposer multisampling={1} autoClear={false}>
              <Outline blur visibleEdgeColor="red" edgeStrength={10000} width={1000} />
            </EffectComposer>

            <MiniMapFactoryModel />
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
