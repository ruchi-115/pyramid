import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as random from 'maath/random'


function Sphere({ position, color }) {
  const ref = useRef();
  useFrame(() => (
    ref.current.rotation.x = ref.current.rotation.y += 0.02
  ))

  return (
    <>
      <mesh castShadow ref={ref} position={position} >
        {/* <sphereGeometry /> */}
        <boxGeometry attach='geometry' />
        <meshStandardMaterial attach='material' color={color} />
      </mesh>
    </>
  )

}

export default function Home(props) {
  return (
    <>
      <Canvas colorManagement shadows camera={{ position: [-5, 2, 10], fov: 40 }}>
        {/* <Stars /> */}
        {/* <pointLight position={[10, 10, 10]} intensity={0.5} /> */}
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>

          <Sphere position={[0, 1, 0]} color={"red"} />
          <Sphere position={[-2, 1, -5]} color={"pink"} />
          <Sphere position={[5, 1, -2]} color={"pink"} />
        </group>
        <OrbitControls />
      </Canvas>
      {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{ margin: 0, padding: 0, fontSize: '5em', fontWeight: 500, letterSpacing: '-0.08em' }}>RUCHITA SONAWALE</h1>
        <h5 style={{ margin: 0, padding: 0, fontSize: '2em', fontWeight: 300, letterSpacing: '-0.05em' }}>CREATIVE | TECHNOLOGIST| WEB DEVELOPER</h5>
      </div> */}
    </>
  )
}
// function Stars(props) {
//   const ref = useRef()
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10
//     ref.current.rotation.y -= delta / 15
//   })
//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
//         <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
//       </Points>
//     </group>
//   )
// }