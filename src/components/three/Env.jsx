
import { Environment } from '@react-three/drei'
import { useControls } from 'leva'
export default function Env() {
  // apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse
  return (
    <Environment
      preset="dawn"
      background
      ground={{
        height: 100,
        radius: 320,
        scale: 500,
      }}
    />
  )
}