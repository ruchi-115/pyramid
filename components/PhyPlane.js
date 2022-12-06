import { Vector3 } from 'three'
import { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Plane, Shadow, Stats, Points, PointMaterial, useCubeTexture, useTexture, SpotLight, useDepthBuffer, KeyboardControls } from '@react-three/drei'
import { Physics, useBox, usePlane } from "@react-three/cannon";

// Plane
function PhyPlane({ color, ...props }) {
    const [ref] = usePlane(() => ({ ...props }));

    return (
        <Plane args={[50, 50]} ref={ref} receiveShadow>
            <meshStandardMaterial color={color} reflectivity={1} />
        </Plane>
    );
}

export default PhyPlane;