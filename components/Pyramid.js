import { Box, OrbitControls, Plane, Sphere, useCubeTexture } from "@react-three/drei";
import React from "react";
import { useRef, useLayoutEffect, useState, useCallback } from 'react'
import { Physics, useBox, usePlane } from "@react-three/cannon";

function Pyramid({ position, color, ...props }) {
    const [ref, api] = useBox(() => ({ position: position, args: [2, 4, 2], mass: 1, ...props }));
    // const ref = useRef();
    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/triangle/' }
    );

    return (
        <>
            <mesh castShadow ref={ref} position={position} onClick={() => api.applyImpulse([0, 0, -55], [0, 0, 0])} >
                <coneGeometry args={[2, 4, 4]} rotation={90} />
                <meshStandardMaterial clearcoat={0.3} envMap={texture} metalness={1} roughness={0} toneMapped={false} color={color} />
            </mesh>
        </>
    )

}

function InvertedPyramid({ position, color, ...props }) {
    const [ref, api] = useBox(() => ({ position: position, rotation: [3.15, 0, 0], args: [2, 4, 2], mass: 1, ...props }));
    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/triangle/' }
    );

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

function PyramidStack() {
    return (
        <group name="Pyramid">
            <Pyramid position={[0, 0, 18]} color={'goldenrod'} />
            <Pyramid position={[2, 0, 16]} color={'goldenrod'} />
            <Pyramid position={[-2, 0, 20]} color={'black'} />
            <Pyramid position={[4, 0, 18]} color={'black'} />
            <Pyramid position={[-4, 0, 22]} color={'goldenrod'} />
            <Pyramid position={[-6, 0, 20]} color={'goldenrod'} />
            <Pyramid position={[-4, 0, 18]} color={'black'} />
            <Pyramid position={[0, 0, 22]} color={'goldenrod'} />
            <Pyramid position={[-2, 0, 24]} color={'black'} />
            <Pyramid position={[-2, 0, 16]} color={'black'} />
            <Pyramid position={[2, 0, 24]} color={'black'} />
            <Pyramid position={[0, 0, 26]} color={'goldenrod'} />
            <Pyramid position={[0, 0, 14]} color={'goldenrod'} />
            <Pyramid position={[2, 0, 20]} color={'black'} />
            <Pyramid position={[4, 0, 22]} color={'goldenrod'} />
            <Pyramid position={[6, 0, 20]} color={'goldenrod'} />
            {/* TOP */}
            <Pyramid position={[0, 4, 20]} color={'black'} />
            <Pyramid position={[2, 4, 22]} color={'goldenrod'} />
            <Pyramid position={[2, 4, 18]} color={'goldenrod'} />
            <Pyramid position={[0, 4, 24]} color={'black'} />
            <Pyramid position={[0, 4, 16]} color={'black'} />
            <Pyramid position={[4, 4, 20]} color={'black'} />
            <Pyramid position={[-4, 4, 20]} color={'black'} />
            <Pyramid position={[-2, 4, 22]} color={'goldenrod'} />
            <Pyramid position={[-2, 4, 18]} color={'goldenrod'} />
            <InvertedPyramid position={[0, 4, 22]} color={'goldenrod'} />
            <InvertedPyramid position={[0, 4, 18]} color={'goldenrod'} />
            <InvertedPyramid position={[2, 4, 20]} color={'goldenrod'} />
            <InvertedPyramid position={[-2, 4, 20]} color={'goldenrod'} />
            {/* top 2 */}
            <Pyramid position={[0, 8, 22]} color={'goldenrod'} />
            <Pyramid position={[0, 8, 18]} color={'goldenrod'} />
            <Pyramid position={[2, 8, 20]} color={'black'} />
            <Pyramid position={[-2, 8, 20]} color={'black'} />
            <InvertedPyramid position={[0, 8, 20]} color={'goldenrod'} />
            {/* topmost */}
            <Pyramid position={[0, 12, 20]} color={'goldenrod'} />
            {/* Inverted Pyramid Base */}
            <InvertedPyramid position={[2, 0, 22]} color={'goldenrod'} />
            <InvertedPyramid position={[4, 0, 20]} color={'goldenrod'} />
            <InvertedPyramid position={[0, 0, 24]} color={'goldenrod'} />
            <InvertedPyramid position={[2, 0, 18]} color={'goldenrod'} />
            <InvertedPyramid position={[0, 0, 16]} color={'goldenrod'} />
            <InvertedPyramid position={[-2, 0, 18]} color={'goldenrod'} />
            <InvertedPyramid position={[-4, 0, 20]} color={'goldenrod'} />
            <InvertedPyramid position={[-2, 0, 22]} color={'goldenrod'} />
            <InvertedPyramid position={[0, 0, 20]} color={'goldenrod'} />
        </group>
    )
}

export default PyramidStack


