import { Box, OrbitControls, Plane, Sphere, useCubeTexture } from "@react-three/drei";
import React from "react";
import { useRef, useLayoutEffect, useMemo, useState, useCallback } from 'react'
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import Text from "../components/Text";
import { extend, useLoader } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import inter from "../public/Inter_Regular.json";
import { Leva, useControls } from "leva";

extend({ TextGeometry });


function PhyPlane({ color, ...props }) {
    const [ref] = usePlane(() => ({ ...props }));

    return (
        <Plane args={[1000, 1000]} ref={ref}>
            <meshStandardMaterial color={color} />
        </Plane>
    );
}

function PhyBox({ letter, ...props }) {
    const [ref, api] = useBox(() => ({ mass: 1, ...props }));
    const font = new FontLoader().parse(inter);
    return (
        <>
            <mesh position={[-3, 0, 0]} castShadow ref={ref} onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])} >
                <textGeometry args={["RUCHITA", { font, size: 1.5, height: 0.5 }]} color={'blue'} />
                <meshBasicMaterial attach='material' />
            </mesh>


        </>
    );


    // return (
    // <Sphere
    //     args={[1, 20, 15]}
    //     ref={ref}

    //     onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])}
    // >
    //     <meshPhysicalMaterial clearcoat={1} clearcoatRoughness={0} transmission={1} thickness={0.9} roughness={0} toneMapped={false}
    //         attach='material' />
    // </Sphere>
    // <Text ref={ref} onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])} />
    // );
}

function Plan() {

    return (
        <Canvas camera={{ position: [0, 10, 30], fov: 40 }}>
            <Physics gravity={[0, -20, 0]}>
                <PhyPlane
                    color="hotpink"
                    position={[0, -2, 0]}
                    rotation={[-Math.PI / 2, 0, 0]} />
                <PhyPlane color="blue" position={[0, 0, -10]} />
                {/* {word.map((letter, index) => (
                    <PhyBox position={[-2 + { index }, 0, -5]} letter={letter} key={index} />
                ))} */}
                {/* <PhyBox position={[0, 0, -5]} /> */}
                {/* <PhyBox position={[-2, 0, -5]} /> */}
                {/* <Text position={[-2, 0, -5]} /> */}


                <group name="triangle">
                    <Triangle position={[0, 0, 0]} color={'goldenrod'} />
                    <Triangle position={[-2, 0, 2]} color={'goldenrod'} />
                    <Triangle position={[-4, 0, 4]} color={'goldenrod'} />
                    <Triangle position={[0, 0, 4]} color={'goldenrod'} />
                    <Triangle position={[-2, 0, 6]} color={'goldenrod'} />
                    <Triangle position={[2, 0, 6]} color={'goldenrod'} />
                    <Triangle position={[0, 0, 8]} color={'goldenrod'} />
                    <Triangle position={[2, 0, 2]} color={'goldenrod'} />
                    <Triangle position={[4, 0, 4]} color={'goldenrod'} />
                    {/* TOP */}
                    <Triangle position={[0, 4, 2]} color={'blue'} />
                    <Triangle position={[2, 4, 4]} color={'blue'} />
                    <Triangle position={[0, 4, 6]} color={'blue'} />
                    <Triangle position={[-2, 4, 4]} color={'blue'} />
                    <InvertedTriangle position={[0, 4, 4]} color={'goldenrod'} />
                    {/* top 2 */}
                    <Triangle position={[0, 8, 4]} color={'goldenrod'} />
                </group>
                <InvertedTriangle position={[2, 0, 4]} color={'goldenrod'} />
                <InvertedTriangle position={[0, 0, 6]} color={'goldenrod'} />
                <InvertedTriangle position={[-2, 0, 4]} color={'goldenrod'} />
                <InvertedTriangle position={[0, 0, 2]} color={'goldenrod'} />
            </Physics>
            {/* <Icosahedron /> */}
            <ambientLight intensity={0.3} />
            <pointLight intensity={0.8} position={[5, 0, 5]} />
            <OrbitControls />
        </Canvas>
    );
}

export default Plan;

function Icosahedron() {
    const [active, set] = useState(false)
    const handleClick = useCallback(e => set(state => !state), [])
    return (
        <mesh scale={active ? [2, 2, 2] : [1, 1, 1]} onClick={handleClick}>
            <icosahedronBufferGeometry attach="geometry" args={[1, 0]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    )
}

// Triangle
function Triangle({ position, color, ...props }) {
    const [ref, api] = useBox(() => ({ position: position, args: [2, 4, 2], mass: 1, ...props }));
    // const ref = useRef();
    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/triangle/' }
    );

    // useFrame(() => (ref.current.rotation.z = 180));


    return (
        <>
            <mesh castShadow ref={ref} position={position} onClick={() => api.applyImpulse([0, 0, -55], [0, 0, 0])} >
                {/* <pointLight position={[-3, -5, -20]} /> */}
                <coneGeometry attach='geometry' args={[2, 4, 4]} rotation={90} />
                <meshStandardMaterial attach="material" clearcoat={0.3} envMap={texture} metalness={1} roughness={0} toneMapped={false} color={color} />
                {/* <meshPhysicalMaterial clearcoat={0.3} clearcoatRoughness={0} transmission={0.5} thickness={0.9} roughness={0} toneMapped={false} metalness={1} attach='material' color={"black"} /> */}
            </mesh>
        </>
    )

}
function InvertedTriangle({ position, color, ...props }) {
    const [ref, api] = useBox(() => ({ position: position, rotation: [3.15, 0, 0], args: [2, 4, 2], mass: 1, ...props }));
    // const ref = useRef();
    const { rotation } = useControls({
        rotation: {
            rotateX: 3.14,
        }
    });
    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/triangle/' }
    );
    const options = useMemo(() => {
        return {
            x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            visible: true,
            color: { value: 'lime' },
        }
    }, [])
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