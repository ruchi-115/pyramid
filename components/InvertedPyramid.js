import { Box, OrbitControls, Plane, Sphere, useCubeTexture } from "@react-three/drei";
import React from "react";
import { useRef, useLayoutEffect, useState, useCallback } from 'react'
import { Physics, useBox, usePlane } from "@react-three/cannon";

function InvertedPyramid({ position, color, ...props }) {
    const [ref, api] = useBox(() => ({ position: position, rotation: [3.15, 0, 0], args: [2, 4, 2], mass: 1, ...props }));
    // const ref = useRef();
    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/triangle/' }
    );
    // const options = useMemo(() => {
    //     return {
    //         x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    //         y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    //         z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    //         visible: true,
    //         color: { value: 'lime' },
    //     }
    // }, [])
    // const p = useControls(options)


    return (
        <>
            <mesh castShadow ref={ref} position={position} rotation={[3.15, 0, 0]} onClick={() => api.applyImpulse([0, 0, -55], [0, 0, 0])} >
                {/* <pointLight position={[-3, -5, -20]} /> */}
                <coneGeometry attach='geometry' args={[2, 4, 4]} />
                <meshStandardMaterial attach="material" clearcoat={0.3} envMap={texture} metalness={1} roughness={0} toneMapped={false} color={color} />
                {/* <meshPhysicalMaterial clearcoat={0.3} clearcoatRoughness={0} transmission={0.5} thickness={0.9} roughness={0} toneMapped={false} metalness={1} attach='material' color={"black"} /> */}
            </mesh>
        </>
    )

}
export default InvertedPyramid;