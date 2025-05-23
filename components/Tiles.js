import React from 'react'
import { RoundedBox, Image, Html, MeshReflectorMaterial } from '@react-three/drei';

const projects = [
  {
    url: '/thumbnail/news-events.png',
    title: 'NEWS-EVENTS',
    link: 'https://news-events.vercel.app/'
  },
  {
    url: '/thumbnail/Planets.jpg',
    title: 'PLANETS',
    link: 'https://planets-gilt.vercel.app/'
  },
  {
    url: '/thumbnail/spotify_clone.png',
    title: 'SPOTIFY-CLONE',
    link: 'https://spotify-clone-6de9b.web.app/'
  },
  {
    url: '/thumbnail/ideacon.png',
    title: 'IDEACON',
    link: 'https://ideacon-gdsc.vercel.app/'
  },
  {
    url: '/thumbnail/medium.png',
    title: 'BLOG MEDIUM',
    link: 'https://next-sanity-blog-eta.vercel.app/'
  },
  {
    url: '/thumbnail/portfolio.png',
    title: '3D Room Portfolio',
    link: 'https://fitbit-d3-ncp7iu5c3-ruchi115s-projects.vercel.app/'
  },
  {
    url: '/thumbnail/nyc_hub.png',
    title: 'NYC TRANSIT HUB',
    link: 'https://null-pointer-eta.vercel.app/'
  }
];

const Tile = ({ url, title, link, ...props }) => {
    // const [ref] = usePlane(() => ({ ...props }));

    return (
        <>
            {/* <Plane attach="geometry" args={[100, 100]} /> */}
            <group>
                <RoundedBox smoothness={10} radius={0.015} {...props}>
                    <MeshReflectorMaterial
                        resolution={1024}
                        mirror={1}
                        mixBlur={10}
                        mixStrength={2}
                        color="#FFD700"
                        metalness={1}
                        roughness={0.1}
                    />
                    <Image position={[0, 0, 0.7]} url={url} scale={[0.9, 0.9]} alt={title} />
                    <Html transform position={[0, 0, -5]} style={{ fontSize: '1px' }}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <div className='w-30 h-30 flex justify-center items-center'>
                                <div className='p-2 opacity-0 hover:opacity-100 duration-200 text-sm text-white' style={{ fontSize: '3px' }} >{title}</div>
                            </div>
                        </a>
                    </Html>
                </RoundedBox>
            </group>
        </>
    );
};

function Tiles() {
    return (
        <>
            <Tile position={[0, -6, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} {...projects[1]} />
            <Tile position={[10, -10, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} {...projects[2]} />
            <Tile position={[15, -15, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} {...projects[3]} />
            <Tile position={[20, -20, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} {...projects[4]} />
            <Tile position={[-10, -10, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} {...projects[0]} />
            <Tile position={[-15, -15, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} {...projects[5]} />
            <Tile position={[-20, -20, 7]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 15, 0.1]} {...projects[6]} />
        </>
    )
}

export default Tiles;