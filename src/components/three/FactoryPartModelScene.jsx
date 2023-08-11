import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Selection, Outline } from '@react-three/postprocessing'

import FactoryPartModel from './FactoryPartModel'

const FactoryPartModelScene = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 4, 1] }} style={{width:'100%',height:'100%'}}>
        <Suspense>
          <directionalLight />
          {/* <Environment
            preset="dawn"
            background
            ground={{
              height: 100,
              radius: 320,
              scale: 500
            }}
          /> */}
          <Selection>
            <EffectComposer multisampling={1} autoClear={false}>
              <Outline blur visibleEdgeColor="#272020" edgeStrength={100} width={1000} />
            </EffectComposer>

            <FactoryPartModel />
          </Selection>
        </Suspense>
      </Canvas>
    </>
  )
}

export default FactoryPartModelScene
