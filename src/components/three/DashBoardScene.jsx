import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Selection, Outline } from '@react-three/postprocessing'

import FactoryModelDashboard from './FactoryModelDashboard'

const DashBoardScene = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 5, 7] }} shadows style={{ height: '500px' }}>
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

            <FactoryModelDashboard />
          </Selection>
        </Suspense>
      </Canvas>
    </>
  )
}

export default DashBoardScene
