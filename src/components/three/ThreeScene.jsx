import { Suspense } from 'react'
import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Environment } from '@react-three/drei'
import { EffectComposer, Selection, Outline } from '@react-three/postprocessing'

import FactoryModel from './FactoryModel'
import Light from './Light'

const ThreeScene = () => {
  return (
    <>
      <Canvas camera={{ position: [-15, 80, 120] }} shadows>
        <Suspense>
          <Light />
          <Environment
            preset="dawn"
            background
            ground={{
              height: 100,
              radius: 320,
              scale: 500
            }}
          />
          <Selection>
            <EffectComposer multisampling={1} autoClear={false}>
              <Outline blur visibleEdgeColor="#272020" edgeStrength={100} width={1000} />
            </EffectComposer>

            <FactoryModel />
          </Selection>
        </Suspense>

        {/* Helper */}
        <Perf position="bottom-left" />

        <axesHelper args={[100]} />

        <CameraControls
          target={[0, 0, 0]}
          enableDamping={true}
          minDistance={10}
          maxDistance={200}
          verticalDragToForward={true}
          dollySpeed={0.5}
          polarRotateSpeed={0.5}
          minPolarAngle={-Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  )
}

export default ThreeScene
