import { Perf } from 'r3f-perf'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import Env from './components/three/Env'
import Lights from './components/three/Light'
import Cameras from './components/three/Cameras'
import CoastLine from './components/geojson/CoastLine'

export default function App() {
  const gltf = useLoader(GLTFLoader, './models/DSG_TEST.glb')

  return (
    <>
      <Canvas style={{background: "#808080"}} camera={{ position: [0, 150, 100] }} shadows>
      {/* <Env /> */}
        <Lights />
        <primitive object={gltf.scene} position={[0, 0, 0]} />
        <CoastLine height={10} />
        <Cameras/>
        <axesHelper args={[50]} />
        <Perf position="top-left" />
      </Canvas>
    </>
  )
}
