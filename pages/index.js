import Head from 'next/head'
import { Vector3 } from 'three'
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTurntable, PerformanceMonitor, OrbitControls, Image, useCursor, RoundedBox, Html, GradientTexture, Shadow, Center, Stats, Points, PointMaterial, useCubeTexture, useTexture, SpotLight, useDepthBuffer, KeyboardControls } from '@react-three/drei'
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { useControls } from 'leva';
import inter from "../public/Inter_Regular.json";
import Text from '../components/Text'
import PhyPlane from '../components/PhyPlane'
import Title from '../components/Title';
import PC from '../components/Pc';
import Shelf from '../components/Shelf';
import Football from '../components/Football';
import GradientWall from '../components/GradientWall';
import Mirrors from '../components/Mirror';
import Tiles from '../components/Tiles';
import PyramidStack from '../components/Pyramid';

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
    state.camera.position.lerp({ x: 0, y: 5, z: zoom ? 60 : -260 }, 0.03)
    state.camera.lookAt(0, 0, 0)
  })
  const font = new FontLoader().parse(inter);
  return (
    <Html position={[0, 200]}
      className='fs-1 p-3 text-center'
      style={{
        fontSize: '40px',
        top: '15em',
        left: '6em',
      }}>
      <a ref={ref} onClick={() => set(!zoom)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}>
        INFO
      </a>
    </Html>
  )
}
function Projects({ position, ...props }) {
  const ref = useRef()
  const [active, setActive] = useState(false)
  const [zoom, set] = useState(true)
  useCursor(active)
  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: zoom ? 5 : -150, z: zoom ? 60 : -50 }, 0.03)
    state.camera.lookAt(0, -10, 0)
  })
  const font = new FontLoader().parse(inter);
  return (
    <Html position={[0, 0]}
      className='fs-1 p-3 text-center'
      style={{
        fontSize: '40px',
        top: '15em',
        left: '16em',
      }}>
      <a ref={ref} onClick={() => set(!zoom)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}>
        PROJECTS
      </a>
    </Html>
  )
}

function Prototypes(position) {
  const ref = useRef()
  const [active, setActive] = useState(false)
  const [zoom, set] = useState(true)
  useCursor(active)
  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: zoom ? 5 : -120, z: zoom ? 60 : -260 }, 0.03)
    state.camera.lookAt(0, 0, 0)
  })
  return (
    <Html position={[0, 0]} className='fs-1 p-3 text-center'
      style={{
        fontSize: '40px',
        top: '15em',
        left: '26em',
      }}>
      <a ref={ref} onClick={() => set(!zoom)} onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}>
        PROTOTYPES
      </a>
    </Html>
  )
}


export default function Home(props) {
  const [dpr, setDpr] = useState(1.5)
  return (
    <>
      <Canvas dpr={dpr} frameloop='demand' shadows camera={{ position: [0, 5, 60], fov: 50 }} >
        {/* <Suspense fallback={null}> */}
        {/* Info plane */}
        <GradientWall />
        <PC castShadow scale={0.5} position={[-15, 3, -7]} rotation={[0, 11, 0]} />
        <Shelf castShadow position={[26, -4, 2]} rotation={[0, Math.PI * 3, 0]} />
        <Football scale={0.05} position={[-10, -2.5, -4]} />
        {/* Info plane */}

        {/* Lights */}
        <ambientLight intensity={0.7} color="#888" />
        <directionalLight position={[10, 20, 10]} intensity={1.2} castShadow color="#fff" />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <pointLight position={[-10, 5, -15]} intensity={1} castShadow />
        <pointLight position={[-3, -3, 2]} />
        {/* <SpotLight
          penumbra={0.5}
          position={[3, 2, 0]}
          intensity={0.5}
          angle={0.5}
          color="yellow"
          castShadow
        /> */}
        {/* Lights */}



        {/* Navbar */}
        {/* Main = home => spin to Projects */}
        {/* Info = info => through to Info */}
        {/* Projects = projects => undecided */}
        <Projects />
        <Prototypes />
        <Info />
        {/* Navbar */}


        {/* Projects plane */}
        <Tiles />
        {/* Projects plane */}

        {/* Home page */}
        <Title />
        <Mirrors />
        {/* Home page */}

        <group >
          <mesh position={[0, -2, 0]} >
            <Plane color="#30303f" scale={[50, 50, 0.2]} />
            <Plane color="#30303f" rotation-x={-Math.PI / 2} position-y={-2.2} position-z={0} scale={[50, 50, 0.2]} />
            <Physics gravity={[0, -20, 0]}>
              <PhyPlane color='#000000' rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} />
              {/* <PhyPlane color='#000000' rotation={[0, 0, 0]} position={[0, -2, 0]} /> */}
              {/* <Sphere position={[-2, 1, 7]} /> */}
              <Text />
              <PyramidStack />
            </Physics>
          </mesh>
          {/* <Triangle position={[30, 3, -25]} /> */}
          {/* <Triangle position={[-30, 3, -25]} /> */}
          {/* <Diamond position={[0, 1, -25]} /> */}
          {/* <Diamond position={[-15, 2, -15]} /> */}
          {/* <Diamond position={[25, 0, -15]} /> */}
        </group>
        <OrbitControls />

        <Stats />
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






