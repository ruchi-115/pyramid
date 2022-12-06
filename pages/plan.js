import { Box, OrbitControls, Float, Billboard, Html, useGLTF, MeshReflectorMaterial, useCubeTexture, Text, useCursor, RoundedBox } from "@react-three/drei";
import React from "react";
import { useRef, useLayoutEffect, useMemo, useState, useCallback } from 'react'
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
// import Text from "../components/Text";
import { extend, useLoader } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry, PlaneBufferGeometry } from "three/examples/jsm/geometries/TextGeometry";
import inter from "../public/Inter_Regular.json";
import { Leva, useControls } from "leva";
import { Effects } from "../components/Effects";
import { Cards } from "../components/Cards";
import PC from "../components/Pc";


extend({ TextGeometry });

const Mirror = ({ color, ...props }) => {
    // const [ref] = usePlane(() => ({ ...props }));
    const ref = useRef();
    useFrame(() => {
        ref.current.rotation.y += 0.01;
    });

    return (
        <>
            <RoundedBox ref={ref} smoothness={10} radius={0.015} {...props}>
                <MeshReflectorMaterial
                    resolution={1024}
                    mirror={1}
                    mixBlur={10}
                    mixStrength={2}
                    blur={[0, 0]}
                    minDepthThreshold={0.8}
                    maxDepthThreshold={1.2}
                    depthScale={0}
                    depthToBlurRatioBias={0.2}
                    debug={0}
                    distortion={0}
                    color="#a0a0a0"
                    metalness={0.5}
                    roughness={1}
                />
            </RoundedBox>
        </>
    );
};



// function PhyPlane({ color, ...props }) {
//     const [ref] = usePlane(() => ({ ...props }));

//     return (
//         <Plane args={[50, 50, 10]} ref={ref}>
//             <meshStandardMaterial color={color} />
//         </Plane>
//     );
// }

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
    const font = new FontLoader().parse(inter);
    return (
        <>
            <Canvas shadows camera={{ position: [0, 10, 30], fov: 70 }}>
                <color attach="background" args={['#151520']} />
                <Effects />
                <PC />

                {/* <Cards /> */}

                <Physics gravity={[0, 0, 0]}>
                    {/* <hemisphereLight intensity={0.5} /> */}
                    <directionalLight position={[0, 2, 5]} castShadow intensity={1} />
                    {/* <Text /> */}
                    {/* <PhyPlane
                    color="hotpink"
                    position={[0, -2, 0]}
                    rotation={[-Math.PI / 2, 0, 0]} /> */}
                    {/* <PhyPlane color="blue" position={[0, 0, 0]} /> */}
                    {/* <Plane color="#f4ae00" rotation-x={-Math.PI / 2} position-y={1} scale={[4.2, 1, 4]} /> */}
                    {/* <Mirror color="black" position-z={-5} scale={[50, 50, 1]} /> */}
                    {/* <Mirror color="black" rotation-x={-Math.PI / 2} position-y={-2} position-z={0} scale={[50, 50, 0.2]} /> */}
                    {/* {word.map((letter, index) => (
                    <PhyBox position={[-2 + { index }, 0, -5]} letter={letter} key={index} />
                ))} */}
                    {/* <PhyBox position={[0, 0, -5]} /> */}
                    {/* <PhyBox position={[-2, 0, -5]} /> */}
                    {/* <Text position={[-2, 0, -5]} /> */}


                    {/* <group name="triangle">
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
                    {/* <Triangle position={[0, 4, 2]} color={'blue'} />
                    <Triangle position={[2, 4, 4]} color={'blue'} />
                    <Triangle position={[0, 4, 6]} color={'blue'} />
                    <Triangle position={[-2, 4, 4]} color={'blue'} />
                    <InvertedTriangle position={[0, 4, 4]} color={'goldenrod'} /> */}
                    {/* top 2 */}
                    {/* <Triangle position={[0, 8, 4]} color={'goldenrod'} /> */}
                    {/* Inverted Triangle */}
                    {/* <InvertedTriangle position={[2, 0, 4]} color={'goldenrod'} />
                    <InvertedTriangle position={[0, 0, 6]} color={'goldenrod'} />
                    <InvertedTriangle position={[-2, 0, 4]} color={'goldenrod'} />
                    <InvertedTriangle position={[0, 0, 2]} color={'goldenrod'} /> */}
                    {/* </group> */}
                </Physics>
                {/* <Icosahedron /> */}
                <ambientLight intensity={0.3} />
                <pointLight intensity={0.8} position={[5, 0, 5]} />
                {/* <Sphere /> */}
                <OrbitControls />


                {/* <mesh position={[5, 5, 5]} >
                    <planeGeometry args={[10, 10, 10]} />
                    <MeshReflectorMaterial
                        resolution={1024}
                        mirror={1}
                        mixBlur={10}
                        mixStrength={2}
                        blur={[0, 0]}
                        minDepthThreshold={0.8}
                        maxDepthThreshold={1.2}
                        depthScale={0}
                        depthToBlurRatioBias={0.2}
                        debug={0}
                        distortion={0}
                        // distortionMap={distortionMap}
                        color="#a0a0a0"
                        metalness={0.5}
                        // roughnessMap={roughness}
                        roughness={1}
                    // normalMap={normal}
                    // normalScale={_normalScale}
                    // reflectorOffset={reflectorOffset}
                    />
                </mesh> */}
                {/* <Text
                    position={[0, 0, 15]}
                    color={'#EC2D2D'}
                    fontSize={4}
                    maxWidth={200}
                    lineHeight={1}
                    letterSpacing={0.02}
                // textAlign={'left'}
                // font={font}
                // anchorX="center"
                // anchorY="middle"
                // outlineWidth={2}
                // outlineColor="#ffffff"
                >
                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT

                </Text> */}
                {/* <Float
                    position={[0, 1.1, 0]}
                    floatingRange={[(10, 0), (0, 10)]}
                    rotation={[Math.PI / 3.5, 0, 0]}
                    rotationIntensity={(2, 4)}
                    floatIntensity={(1, 2)}
                    speed={(2, 5)}
                >
                    <mesh >
                        <boxGeometry args={[2, 2, 2]} />
                        <meshStandardMaterial wireframe color="white" />
                    </mesh>
                </Float> */}
            </Canvas >
        </>
    );
}

export default Plan;



function Sphere() {
    const ref = useRef()
    const [active, setActive] = useState(false)
    const [zoom, set] = useState(true)
    useCursor(active)
    useFrame((state) => {
        state.camera.position.lerp({ x: 0, y: zoom ? 5 : -35, z: zoom ? 30 : 10 }, 0.06)
        state.camera.lookAt(0, 0, 0)
    })
    // const font = new FontLoader().parse(inter);

    return (
        // <mesh ref={ref} onClick={() => set(!zoom)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}>
        //     <sphereGeometry args={[1, 64, 64]} />
        //     <meshStandardMaterial color={active ? 'hotpink' : 'lightblue'} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.25} />
        // </mesh>
        // <Billboard follow='false' lockX='true' lockY='true' lockZ='true'>
        <Text

            color={'#EC2D2D'}
            fontSize={12}
            maxWidth={200}
            lineHeight={1}
            letterSpacing={0.02}
        // textAlign={'left'}
        // font={font}
        // anchorX="center"
        // anchorY="middle"
        // outlineWidth={2}
        // outlineColor="#ffffff"
        >
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE

        </Text>
        // </Billboard>
        // <Html position={[0, 0]}
        //     style={{
        //         fontSize: '50px',
        //         padding: '10px 18px',
        //     }}><a ref={ref} onClick={() => set(!zoom)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}>
        //         Hello</a></Html>

    )
}

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
            <mesh castShadow ref={ref} position={position} onClick={() => api.applyImpulse([0, 0, -5], [0, 0, 0])} >
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
            <mesh castShadow ref={ref} position={position} rotation={[3.15, 0, 0]} onClick={() => api.applyImpulse([0, 0, -5], [0, 0, 0])} >
                {/* <pointLight position={[-3, -5, -20]} /> */}
                <coneGeometry attach='geometry' args={[2, 4, 4]} />
                <meshStandardMaterial attach="material" clearcoat={0.3} envMap={texture} metalness={1} roughness={0} toneMapped={false} color={color} />
                {/* <meshPhysicalMaterial clearcoat={0.3} clearcoatRoughness={0} transmission={0.5} thickness={0.9} roughness={0} toneMapped={false} metalness={1} attach='material' color={"black"} /> */}
            </mesh>
        </>
    )

}