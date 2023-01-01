import React from 'react'
import { RoundedBox, Image, Html } from '@react-three/drei';


const Tile = ({ url, title, ...props }) => {
    // const [ref] = usePlane(() => ({ ...props }));

    return (
        <>
            {/* <Plane attach="geometry" args={[100, 100]} /> */}
            <group>
                <RoundedBox smoothness={10} radius={0.015} {...props}>
                    <meshBasicMaterial color={'black'} />
                    <Image position={[0, 0, 0.7]} url={url} scale={[0.9, 0.9]} />
                    <Html transform position={[0, 0, -5]} style={{ fontSize: '1px' }}>
                        <a href='#'>
                            <div className='w-30 h-30 flex justify-center items-center'>
                                <div className='p-2 opacity-0 hover:opacity-100 duration-200 text-sm text-white' style={{ fontSize: '3px' }} >{title}</div>
                            </div>
                        </a></Html>
                </RoundedBox>
            </group>
        </>
    );
};

function Tiles() {
    return (
        <>
            <Tile position={[0, -6, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} url={'/thumbnail/Planets.jpg'} title={'PLANETS'} />
            <Tile position={[10, -10, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} url={'/thumbnail/spotify_clone.png'} title={'SPOTIFY-CLONE'} />
            <Tile position={[15, -15, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} url={'/thumbnail/ideacon.png'} title={'IDEACON'} />
            <Tile position={[20, -20, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} url={'/thumbnail/doctor_bot.png'} title={'DOCTOR-BOT'} />
            {/* <Tile position={[25, -25, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]}url={'/thumbnail/terrazo.png'}  /> */}
            <Tile position={[-10, -10, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} url={'/thumbnail/news-events.png'} title={'NEWS-EVENTS'} />
            <Tile position={[-15, -15, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} url={'/terrazo.png'} />
            <Tile position={[-20, -20, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} url={'/terrazo.png'} />
            {/* <Tile position={[-25, -25, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 10, 0.1]} /> */}
        </>
    )
}

export default Tiles;