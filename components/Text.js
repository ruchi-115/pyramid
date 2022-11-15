import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import lobster from "../public/Lobster_Regular.json";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, Points, PointMaterial, Stars, useCubeTexture, Plane } from '@react-three/drei'
import inter from "../public/Inter_Regular.json";

extend({ TextGeometry });

export default function Text() {
    return (
        <mesh position={[-3, 0, 0]} castShadow>
            <PhyBox />
        </mesh>
    );
}

function PhyBox({ letter, ...props }) {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));
    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/triangle/' }
    );
    const font = new FontLoader().parse(inter);
    return (
        <>
            <mesh castShadow ref={ref} onClick={() => api.applyImpulse([0, 0, -14], [0, 0, 0])} >
                <textGeometry args={["RUCHITA", { font, size: 3, height: 0.5 }]} />
                <meshBasicMaterial attach='material' envMap={texture} reflectivity={1} />
            </mesh>


        </>
    );
}