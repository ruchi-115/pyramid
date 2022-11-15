import { Vector3 } from 'three'
import { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Plane, Shadow, Stats, Points, PointMaterial, useCubeTexture, useTexture, SpotLight, useDepthBuffer, KeyboardControls } from '@react-three/drei'
import { Physics, useBox, usePlane } from "@react-three/cannon";
// Rotating Sphere
function Sphere({ position }) {
    const texture = useTexture('/terrazo.png')
    const ref = useRef();
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * 0.5;
        ref.current.position.x = Math.sin(t) * 15;
        ref.current.position.y = Math.cos(t) * 15;
        // ref.current.position.z = Math.sin(t) * 5;
        // ref.current.position.x = ref.current.position.y += Math.sin(state.clock.elapsedTime) * 0.2)
        ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01;
    });

    return (
        <>
            <mesh castShadow ref={ref} position={position} >
                <sphereGeometry attach='geometry' args={[0.5, 10, 2]} />
                {/* <meshPhysicalMaterial clearcoat={1} clearcoatRoughness={0} transmission={1} thickness={0.9} roughness={0} toneMapped={false} attach='material' envMap={texture} color={color}  /> */}
                <meshPhysicalMaterial envMapIntensity={0.2} map={texture} clearcoat={0.3} clearcoatRoughness={0} roughness={1} metalness={0.9} />
            </mesh>
        </>
    )

}