import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Selection, Outline } from '@react-three/postprocessing'

import FactoryPartModel from './FactoryPartModel'
import FactoryPartCameraControl from './FactoryPartCameraControl'


const FactoryPartModelScene = () => {
  return (
    <>
      <Canvas style={{width:'100%',height:'100%'}}>

        <Suspense>
          <directionalLight />
          <Selection>
            <EffectComposer multisampling={1} autoClear={false}>
              <Outline blur visibleEdgeColor="#272020" edgeStrength={100} width={1000} />
            </EffectComposer>

            <FactoryPartModel />
          </Selection>
        </Suspense>
        {/* <axesHelper args={[200]} /> */}

        <FactoryPartCameraControl />        
      </Canvas>
    </>
  )
}

export default FactoryPartModelScene
