import { Canvas, useFrame } from '@react-three/fiber'

export default function Sparks() {
    return (
        <>
            <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <dodecahedronBufferGeometry args={[0.2, 0]} />
                <meshPhongMaterial color="#050505" />
            </instancedMesh>
        </>
    )
}

const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        const time = Random.range(0, 100);
        const factor = Random.range(20, 120);
        const speed = Random.range(0.01, 0.015) / 2;
        const x = Random.range(-50, 50);
        const y = Random.range(-50, 50);
        const z = Random.range(-50, 50);

        temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
}, [count]);