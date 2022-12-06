import Head from 'next/head'
import Image from 'next/image'
import { Vector3 } from 'three'
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useCursor, RoundedBox, Html, Shadow, Center, Stats, Points, PointMaterial, useCubeTexture, useTexture, SpotLight, useDepthBuffer, KeyboardControls } from '@react-three/drei'
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { useControls } from 'leva';
import inter from "../public/Inter_Regular.json";
import Text from '../components/Text'
import Diamond from '../components/Diamond'
import Triangle from '../components/Triangle'
import PhyPlane from '../components/PhyPlane'
// import Sphere from '../components/RotatingSphere'
import Pyramid from '../components/Pyramid'
import InvertedPyramid from '../components/InvertedPyramid'
import Title from '../components/Title';
import Mirror from '../components/Mirror';

const Plane = ({ color, ...props }) => {
  // const [ref] = usePlane(() => ({ ...props }));
  return (
    <>
      {/* <Plane attach="geometry" args={[100, 100]} /> */}
      <RoundedBox smoothness={10} radius={0.015} {...props}>
        <meshStandardMaterial color={color} envMapIntensity={1} roughness={1} metalness={1} />
      </RoundedBox>
    </>
  );
};

function Info({ position, ...props }) {
  const ref = useRef()
  const [active, setActive] = useState(false)
  const [zoom, set] = useState(true)
  useCursor(active)
  useFrame((state) => {
    // ref.current.rotation.y += 0.01
    // state.camera.position.lerp({ x: 0, y: zoom ? 5 : -120, z: zoom ? 60 : -30 }, 0.03)
    state.camera.position.lerp({ x: 0, y: 5, z: zoom ? 60 : -200 }, 0.03)
    state.camera.lookAt(0, 0, 0)
  })
  const font = new FontLoader().parse(inter);
  return (
    <Html position={[0, 200]}
      style={{
        fontSize: '50px',
        padding: '10px 18px',
        top: '60px',
      }}><a ref={ref} onClick={() => set(!zoom)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}>
        INFO</a></Html>
  )
}
function Main({ position, ...props }) {
  const ref = useRef()
  const [active, setActive] = useState(false)
  const [zoom, set] = useState(true)
  useCursor(active)
  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: zoom ? 5 : -120, z: zoom ? 60 : -30 }, 0.03)
    state.camera.lookAt(0, -10, 0)
  })
  const font = new FontLoader().parse(inter);
  return (
    <Html position={[0, 0]}
      style={{
        fontSize: '50px',
        padding: '10px 18px',
        font: 'capitalize',
      }}><a ref={ref} onClick={() => set(!zoom)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}>
        HOME</a></Html>
  )
}

function Projects(position) {
  const ref = useRef()
  const [active, setActive] = useState(false)
  const [zoom, set] = useState(true)
  useCursor(active)
  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: zoom ? 10 : 350, z: zoom ? 60 : 200 }, 0.01)
    state.camera.lookAt(0, 0, 0)
  })
  return (
    <Html position={[0, 0]}
      style={{
        fontSize: '50px',
        padding: '10px 18px',
        top: '120px',
      }}><a ref={ref} onClick={() => set(!zoom)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}>
        PROJECTS</a></Html>
  )
}

export default function Home(props) {

  return (
    <>
      <Canvas shadows camera={{ position: [-2, 5, 25], fov: 50 }} >
        {/* <Scene /> */}
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        {/* <ambientLight intensity={1} color={"yellow"} /> */}
        <pointLight position={[-10, 5, -15]} intensity={1} castShadow />
        <pointLight position={[0, -10, 0]} intensity={1.5} castShadow color='goldenrod' />
        {/* <ambientLight /> */}
        <pointLight position={[-3, -3, 2]} />

        <Main position={[0, 5, 5]} />
        <Info position={[10, 5, 5]} />
        <Projects />
        {/* <SpotLight
          penumbra={0.5}
          position={[3, 2, 0]}
          intensity={0.5}
          angle={0.5}
          color="yellow"
          castShadow
        /> */}

        <Title />
        <Mirror position={[-25, 8, 10]} rotation={[2.1, 2.12, 2]} scale={[10, 10, 0.1]} />
        <Mirror position={[-15, 20, 8]} rotation={[2.1, 8.12, 1]} scale={[9, 9, 0.1]} />
        <Mirror position={[0, 22, 8]} rotation={[2.1, 5.12, 1]} scale={[10, 10, 0.1]} />
        <Mirror position={[10, 18, 12]} rotation={[1.1, 2.12, 7]} scale={[10, 10, 0.2]} />
        <Mirror position={[22, 15, 12]} rotation={[1.19, 4.78, 1]} scale={[10, 10, 0.2]} />
        <Mirror position={[12, 6, 11]} rotation={[1.19, 3.78, 3]} scale={[8, 8, 0.2]} />
        <Mirror position={[-8, 6, 10]} rotation={[2.19, 3.78, 2]} scale={[8, 8, 0.2]} />
        <Mirror position={[5, 5, 10]} rotation={[2.19, 6.78, 5]} scale={[6, 6, 0.2]} />

        <group >
          <mesh position={[0, -2, 0]} >
            <Plane color="#30303f" scale={[50, 50, 0.2]} />
            <Plane color="#30303f" rotation-x={-Math.PI / 2} position-y={-2.2} position-z={0} scale={[50, 50, 0.2]} />
            <Physics gravity={[0, -20, 0]}>
              <PhyPlane color='#000000' rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} />
              <Text position={[0, -5, 0]} />
              {/* <Sphere position={[-2, 1, 7]} /> */}
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
                <Pyramid position={[0, 8, 18]} color={'black'} />
                <Pyramid position={[2, 8, 20]} color={'goldenrod'} />
                <Pyramid position={[-2, 8, 20]} color={'goldenrod'} />
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
            </Physics>
          </mesh>
          <Triangle position={[30, 3, -25]} />
          <Triangle position={[-30, 3, -25]} />
          {/* <Diamond position={[0, 1, -25]} /> */}
          <Diamond position={[-15, 2, -15]} />
          <Diamond position={[25, 0, -15]} />
        </group>
        <OrbitControls />
      </Canvas>
      {/* <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 className='text-gradient' style={{ margin: 0, padding: "0", fontSize: '5em', fontWeight: 300, letterSpacing: '0.1em', width: '950px' }}>RUCHITA SONAWALE</h1>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h5 style={{ margin: 0, padding: 0, fontSize: '1.8em', fontWeight: 200, letterSpacing: '0.08em', minWidth: '800px' }}>CREATIVE | TECHNOLOGIST| WEB DEVELOPER</h5>
      </div> */}
      {/* <div className='absolute top-1/3 left-1/4 ' style={{ transform: 'translate3d(-50%,-50%,0)' }}>
        <p className="px-3 italic" style={{ fontSize: '2.8em', letterSpacing: '0.2em', }}><a href="/work">WORK</a></p>
        <p className="px-3 italic" style={{ fontSize: '2.8em', letterSpacing: '0.1em', }}><a href='/info'>INFO</a></p>
        <p className="px-3 italic" style={{ fontSize: '2.8em', letterSpacing: '0.1em', }}><a href='/projects'>PROTOTYPES</a></p>
        <p className="px-3 italic" style={{ fontSize: '2.8em', letterSpacing: '0.1em', }}><a href='/articles'>ARTICLES</a></p>
      </div> */}

    </>
  )
}






