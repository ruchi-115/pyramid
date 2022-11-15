import { useState, useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useCubeTexture } from '@react-three/drei'

// Diamond
function Diamond({ position }) {
    const ref = useRef();
    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01));

    // ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01;
    // });
    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/diamond/' }
    );


    return (
        <>
            <mesh castShadow ref={ref} position={position} >
                {/* <pointLight position={[-3, -5, -20]} /> */}
                <dodecahedronGeometry attach='geometry' args={[2, 0]} />
                <meshStandardMaterial attach="material" clearcoat={0.3} envMap={texture} metalness={1} roughness={0} toneMapped={false} color={'white'} />
                {/* <meshPhysicalMaterial clearcoat={0.3} clearcoatRoughness={0} transmission={0.5} thickness={0.9} roughness={0} toneMapped={false} metalness={1} attach='material' color={"black"} /> */}
            </mesh>
        </>
    )

}

export default Diamond