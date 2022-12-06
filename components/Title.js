import React from 'react'
import { Text } from '@react-three/drei'
import { useControls } from 'leva'
function Title() {
    const { rotation } = useControls({ rotation: [0, 9.40, 0] })

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
                position={[0, 10, -10]}
                color={'white'}
                fontSize={4}
                maxWidth={150}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'left'}
                anchorX="center"
                anchorY="middle"
                rotation={rotation}
            >
                {/* Writer */}
                DEVELOPER
                {/* Designer */}

            </Text>
            <Text
                position={[10, 14, -10]}
                color={'white'}
                fontSize={4}
                maxWidth={150}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'left'}
                anchorX="center"
                anchorY="middle"
                rotation={rotation}
            >
                Writer
                {/* DEVELOPER */}
                {/* Designer */}

            </Text>
            <Text
                position={[-10, 5, -10]}
                color={'white'}
                fontSize={4}
                maxWidth={150}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign={'left'}
                anchorX="center"
                anchorY="middle"
                rotation={rotation}
                fontStyle="italic"
            >
                {/* Writer */}
                {/* DEVELOPER */}
                Designer

            </Text>
        </>
    )
}

export default Title