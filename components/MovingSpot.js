import { Vector3 } from 'three'
import { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Plane, Shadow, Stats, Points, PointMaterial, useCubeTexture, useTexture, SpotLight, useDepthBuffer, KeyboardControls } from '@react-three/drei'
import { Physics, useBox, usePlane } from "@react-three/cannon";

function Scene() {
    // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
    // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
    const depthBuffer = useDepthBuffer({ frames: 1 })
    return (
        <>
            <MovingSpot depthBuffer={depthBuffer} color="#B9B9B9" position={[3, 10, 2]} />
            {/* <MovingSpot depthBuffer={depthBuffer} color="#E5CD02" position={[10, 10, 20]} /> */}
        </>
    )
}
function MovingSpot({ vec = new Vector3(), ...props }) {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state) => {
        light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
        light.current.target.updateMatrixWorld()
    })
    return <SpotLight castShadow ref={light} penumbra={50} distance={80} angle={5} attenuation={10} anglePower={5} intensity={5} {...props} />
}

export default Scene;