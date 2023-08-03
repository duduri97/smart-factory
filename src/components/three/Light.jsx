import * as THREE from 'three'
import { useRef } from 'react'
import { useControls } from 'leva'

export default function Lights() {
  const directionalRef = useRef()

  useControls('Directional Light', {
    visible: {
      value: true,
      onChange: (v) => {
        directionalRef.current.visible = v
      }
    },
    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (v) => {
        directionalRef.current.position.copy(v)
      }
    },
    color: {
      value: 'white',
      onChange: (v) => {
        directionalRef.current.color = new THREE.Color(v)
      }
    },
    castShadow: {
      value: true,
      onChange: (v) => {
        directionalRef.current.castShadow = v;
      }
    }
  })

  return (
    <>
      <directionalLight ref={directionalRef} />
    </>
  )
}