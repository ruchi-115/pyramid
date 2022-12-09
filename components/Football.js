import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";


function Football(props) {
    const colorMap = useTexture("football_texture.jpg");
    const ref = useRef();
    return (
        <mesh castShadow ref={ref} {...props}>
            <sphereGeometry args={[30, 30, 30]} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
}

export default Football;