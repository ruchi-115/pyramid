import React from 'react'
import { Text, Html } from '@react-three/drei'
import { useControls } from 'leva'
function Title() {
    return (
        <>
            <Text
                position={[0, 10, 10]}
                color={'white'}
                fontSize={10}
                maxWidth={200}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'left'}
                anchorX="center"
                anchorY="middle"
            >
                RUCHITA

            </Text>
            <Text
                position={[0, 12, -5]}
                color={'white'}
                fontSize={1.5}
                maxWidth={45}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'center'}
                anchorX="center"
                anchorY="middle"
                rotation={[0, 9.40, 0]}
            >
                {/* Writer */}
                Hey, I&apos;m Ruchita, full stack developer, designer and writer. I love to create things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                {/* Designer */}

            </Text>
            <Text
                position={[0, -5, 17]}
                color={'white'}
                fontSize={6}
                maxWidth={150}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'left'}
                anchorX="center"
                anchorY="middle"
                rotation={[Math.PI / 2, 0, 0]}
            >

                PROJECTS

            </Text>
            {/* <Text
                position={[-10, 5, -10]}
                color={'white'}
                fontSize={4}
                maxWidth={150}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'left'}
                anchorX="center"
                anchorY="middle"
                rotation={[0, 9.40, 0]}
                fontStyle="italic"
            >
                Designer

            </Text> */}
        </>
    )
}

export default Title