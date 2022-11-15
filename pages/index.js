import Head from 'next/head'
import Image from 'next/image'
import { Vector3 } from 'three'
import { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Plane, Shadow, Stats, Points, PointMaterial, useCubeTexture, useTexture, SpotLight, useDepthBuffer, KeyboardControls } from '@react-three/drei'
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { useControls } from 'leva';

import Text from '../components/Text'
import Diamond from '../components/Diamond'
import Triangle from '../components/Triangle'
import PhyPlane from '../components/PhyPlane'
import Sphere from '../components/RotatingSphere'
import Pyramid from '../components/Pyramid'

export default function Home(props) {

  return (
    <>
      <Canvas shadows camera={{ position: [-2, 3, 25], fov: 40 }} >
        {/* <Scene /> */}
        <pointLight position={[10, 10, 10]} intensity={0.5} castShadow />
        {/* <ambientLight intensity={1} color={"blue"} /> */}
        <pointLight position={[-10, 5, -15]} intensity={1} castShadow />
        {/* <pointLight position={[0, -10, 0]} intensity={1.5} castShadow color='hotpink' /> */}
        {/* <ambientLight /> */}

        <pointLight position={[-3, -3, 2]} />
        {/* <SpotLight
          penumbra={0.5}
          position={[3, 2, 0]}
          intensity={0.5}
          angle={0.5}
          color="yellow"
          castShadow
        /> */}

        <group >
          <mesh position={[0, -2, 0]} >
            <Physics gravity={[0, -20, 0]}>
              <PhyPlane color='black' rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} />
              <Text position={[0, -5, 0]} />
              {/* <Sphere position={[-2, 1, 7]} /> */}
            </Physics>
          </mesh>
          {/* <Sphere position={[-2, 5, 7]} />
          <Sphere position={[2, 1, 2]} />
          <Sphere position={[5, 3, -5]} />
          <Sphere position={[-4, 8, -7]} />
          <Sphere position={[0, 1, 0]} color={"red"} />
          <Sphere position={[-2, 1, -5]} color={"royalblue"} /> */}
          <Triangle position={[30, 3, -25]} />
          <Triangle position={[-30, 3, -25]} />
          {/* <Diamond position={[0, 1, -25]} /> */}
          <Diamond position={[-15, 2, -15]} />
          <Diamond position={[25, 0, -15]} />
        </group>

        {/* Pyramid */}
        <group name="Pyramid">
          <Pyramid position={[0, 0, -20]} color={'goldenrod'} />
          <Pyramid position={[-2, 0, -22]} color={'grey'} />
          <Pyramid position={[-4, 0, -24]} color={'goldenrod'} />
          <Pyramid position={[0, 0, -24]} color={'goldenrod'} />
          <Pyramid position={[-2, 0, -26]} color={'grey'} />
          <Pyramid position={[2, 0, -26]} color={'grey'} />
          <Pyramid position={[0, 0, -28]} color={'goldenrod'} />
          <Pyramid position={[2, 0, -22]} color={'grey'} />
          <Pyramid position={[4, 0, -24]} color={'goldenrod'} />
          {/* TOP */}
          <Pyramid position={[0, 3, -22]} color={'grey'} />
          <Pyramid position={[2, 3, -24]} color={'goldenrod'} />
          <Pyramid position={[0, 3, -26]} color={'grey'} />
          <Pyramid position={[-2, 3, -24]} color={'goldenrod'} />
          {/* top 2 */}
          <Pyramid position={[0, 6, -24]} color={'goldenrod'} />
        </group>

        <OrbitControls />
      </Canvas>
      {/* <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 className='text-gradient' style={{ margin: 0, padding: "0", fontSize: '5em', fontWeight: 300, letterSpacing: '0.1em', width: '950px' }}>RUCHITA SONAWALE</h1>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h5 style={{ margin: 0, padding: 0, fontSize: '1.8em', fontWeight: 200, letterSpacing: '0.08em', minWidth: '800px' }}>CREATIVE | TECHNOLOGIST| WEB DEVELOPER</h5>
      </div> */}
      <div className='absolute top-1/3 left-1/4 ' style={{ transform: 'translate3d(-50%,-50%,0)' }}>
        <p className="px-3 italic" style={{ fontSize: '2.8em', letterSpacing: '0.2em', }}><a href="/work">WORK</a></p>
        <p className="px-3 italic" style={{ fontSize: '2.8em', letterSpacing: '0.1em', }}><a href='/info'>INFO</a></p>
        <p className="px-3 italic" style={{ fontSize: '2.8em', letterSpacing: '0.1em', }}><a href='/projects'>PROTOTYPES</a></p>
        <p className="px-3 italic" style={{ fontSize: '2.8em', letterSpacing: '0.1em', }}><a href='/articles'>ARTICLES</a></p>
      </div>

    </>
  )
}






