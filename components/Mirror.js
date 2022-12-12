import { Canvas, useFrame } from "@react-three/fiber";
import { MeshReflectorMaterial, RoundedBox } from "@react-three/drei";
import { useRef } from "react";

const Mirror = ({ color, ...props }) => {
    const ref = useRef();
    useFrame(() => {
        ref.current.rotation.y += 0.001
        ref.current.rotation.z += 0.01
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
                    color="#DAA520"
                    metalness={0.5}
                    roughness={1}
                />
            </RoundedBox>
        </>
    );
};

function Mirrors() {
    return (
        <>
            <Mirror position={[-25, 8, 10]} rotation={[2.1, 2.12, 2]} scale={[10, 10, 0.1]} />
            <Mirror position={[-15, 20, 8]} rotation={[2.1, 8.12, 1]} scale={[9, 9, 0.1]} />
            <Mirror position={[0, 20, 8]} rotation={[2.1, 5.12, 1]} scale={[10, 10, 0.1]} />
            <Mirror position={[10, 18, 12]} rotation={[1.1, 2.12, 7]} scale={[10, 10, 0.2]} />
            <Mirror position={[22, 15, 12]} rotation={[1.19, 4.78, 1]} scale={[10, 10, 0.2]} />
            <Mirror position={[12, 6, 11]} rotation={[1.19, 3.78, 3]} scale={[8, 8, 0.2]} />
            <Mirror position={[-8, 6, 10]} rotation={[2.19, 3.78, 2]} scale={[8, 8, 0.2]} />
            <Mirror position={[5, 5, 10]} rotation={[2.19, 6.78, 5]} scale={[6, 6, 0.2]} />
        </>
    )
}

export default Mirrors;
