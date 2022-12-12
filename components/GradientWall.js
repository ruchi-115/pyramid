import React from 'react'
import { GradientTexture } from '@react-three/drei'

function GradientWall() {
    return (
        <mesh position={[0, 0, -1]} rotation={[0, 9.40, 0]} scale={50}>
            <planeGeometry />
            <meshBasicMaterial metalness={1} reflectivity={1}>
                <GradientTexture
                    stops={[0, 0.5, 1]} // As many stops as you want
                    colors={['black', '#3E3E42', 'black']} // Colors need to match the number of stops
                    size={1024} // Size is optional, default = 1024
                />
            </meshBasicMaterial>
        </mesh>
    )
}

export default GradientWall