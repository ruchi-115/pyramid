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
                    color="goldenrod"
                    metalness={0.5}
                    roughness={1}
                />
            </RoundedBox>
        </>
    );
};

export default Mirror;