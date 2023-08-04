import * as THREE from 'three'
import { convertCoordinateToVector } from './convertCoordinateToVector'

const SingleCoastLine = ({ coordinates, height }) => {

  const vertex = (location, height) => {

    const vector = convertCoordinateToVector(location, height)

    return new THREE.Vector3(...vector)
  }

  const wireframe = (coordinates, height) => {
    
    const geometry = new THREE.BufferGeometry()
    const points = []

    for (let i = 0; i < coordinates.length; i++) {
      const vector3 = vertex(coordinates[i], height.height)
      points.push(vector3)
    }
    geometry.setFromPoints(points)

    return geometry
  }

  return (
    <line geometry={wireframe(coordinates, height)}>
      <lineBasicMaterial attach="material" color={'red'} linewidth={1} />
    </line>
  )
}

export default SingleCoastLine
