import { Suspense } from 'react'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'

import { EffectComposer, Selection, Outline } from '@react-three/postprocessing'

import FactoryModel from './FactoryModel'
import Light from './Light'

import FactoryCameraControl from './FactoryCameraControl'


const FactoryScene = () => {
  return (
    <>
      <Canvas style={{width:'100%',height:'100%'}}>

        <Suspense>
          <Light />
          <Selection>
            <EffectComposer multisampling={1} autoClear={false}>
              <Outline blur visibleEdgeColor="#272020" edgeStrength={100} width={1000} />
            </EffectComposer>

            <FactoryModel />
          </Selection>
        </Suspense>

        {/* Helper */}
        <Perf position="bottom-left" />

        {/* <axesHelper args={[100]} /> */}

        <FactoryCameraControl />
      </Canvas>
    </>
  )
}

export default FactoryScene
