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
        <>
            <mesh castShadow>
                {/* <PhyBox text="RUCHITA" position={[-10, 0, 10]} size="4" height="0.5" /> */}
                {/* <PhyBox text="Web Dev" position={[3, 0, 10]} rotation={[5, 0, 0]} size="1.5" height="0.3" /> */}
            </mesh>
        </>
    );
}

function PhyBox({ letter, text, size, height, ...props }) {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));
    const texture = useCubeTexture(
        ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
        { path: '/triangle/' }
    );
    const font = new FontLoader().parse(inter);
    return (
        <>
            <mesh castShadow ref={ref} onClick={() => api.applyImpulse([0, 0, -14], [0, 0, 0])} >
                <textGeometry args={[text, { font, size: size, height: height }]} />
                <meshBasicMaterial attach='material' color='goldenrod' envMap={texture} reflectivity={1} />
            </mesh>

        </>
    );
}