import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import lobster from "../public/Lobster_Regular.json";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, Points, PointMaterial, Stars, useCubeTexture, Plane } from '@react-three/drei'
import inter from "../public/Inter_Regular.json";
import { useControls } from "leva";
extend({ TextGeometry });

export default function Text() {
    return (
        <>
            <mesh castShadow>
                {/* <PhyBox text="WRITER" position={[18, 0, -15]} rotation={[0, Math.PI * 3, 0]} size="2" height="0.8" /> */}
                <PhyBox text="DEVELOPER" position={[6, 0, -20]} rotation={[0, Math.PI * 3, 0]} size="2" height="0.8" />
                <PhyBox text="DESIGNER" position={[-10, 0, -25]} rotation={[0, Math.PI * 3, 0]} size="2" height="0.8" />

            </mesh>
        </>
    );
}

function PhyBox({ text, size, height, ...props }) {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));
    const font = new FontLoader().parse(inter);
    return (
        <>
            <mesh castShadow ref={ref} onClick={() => api.applyImpulse([0, 0, 14], [0, 0, 0])} >
                {/* <mesh castShadow> */}
                <textGeometry args={[text, { font, size: size, height: height }]} />
                <meshStandardMaterial />
            </mesh>

        </>
    );
}